(ns shout-client.socket
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async]
            [clojure.walk :refer [keywordize-keys]]
            [flux.dispatcher :as dispatcher :refer [dispatch!]]))

(def events
  ["msg" "error" "join" "nick" "network"])

(defn join [socket {:keys [network-id channel]}]
  (.emit socket "input" #js {:target network-id :text (str "/join " channel)}))

(defn init []
  (let [socket (js/io)]
    (.on socket "*"
       (fn [data] (let [event (keyword (.-_event data))]
        (dispatch! event (keywordize-keys (js->clj data))))))

    (.emit socket "conn" #js {:nick "notbrent-cljs"
                              :username "notbrent-cljs"
                              :realname "brent vatne"
                              :channels "#test"})

    (.on socket "network" (fn [data]
      (go (<! (async/timeout 1000))
          (join socket {:network-id (.. data -network -id) :channel "#test"}))))))

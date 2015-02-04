(ns shout-client.socket
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async]))

(def events
  ["msg"
  "error"
  "join"
  "nick"
  "network"])

(defn init []
  (let [socket (js/io)]
    (.on socket "init" (fn [data] (.log js/console data)))
    (.on socket "*" (fn [data] (.log js/console data)))
    ; (doseq [event events]
    ;   (.on socket event (fn [data] (.log js/console event) (.log js/console data))))
    ; (.emit socket "quit")
    (.emit socket "conn" #js {:nick "notbrent-cljs"
                              :username "notbrent-cljs"
                              :realname "brent vatne"
                              :channels "#clojurescript, #clojure"})
    (go (<! (async/timeout 3000))
        (.emit socket "input" #js {:target 8 :text "/join #test"}))))

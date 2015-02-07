(ns shout-client.store
  (:require [flux.dispatcher :as dispatcher]))

; (def app-state (atom {:connect-page {}
;                       :networks []}))

(def app-state (atom
  {:connect-form {:network-name "Freenode"
                  :network-uri "irc.freenode.org"
                  :network-port "6697"
                  :user-nick "notbrent-cljs-client"
                  :user-username "notbrent-cljs-client"
                  :user-real-name "Brent Vatne"
                  :user-channels "#clojurescript"}
   :networks []}))

(def stream (partial dispatcher/stream :store))

(stream :network (fn [data]
  (let [networks (:networks @app-state)
        new-network (get data :network)]
    (swap! app-state assoc-in [:networks] (conj networks new-network)))))

; (stream :msg (fn [data] (.log js/console (clj->js data))))

(defn log-state [] (.log js/console (clj->js @app-state)))

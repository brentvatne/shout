(ns shout-client.socket)

(def events
  ["msg"
  "error"
  "join"
  "network"])

(defn init []
  (let [socket (js/io)]
    (.on socket "init" (fn [data] (.log js/console data)))
    (doseq [event events]
      (.on socket event (fn [data] (.log js/console event) (.log js/console data))))
    ; (.emit socket "quit")
    ; (.emit socket "conn" #js {:nick "notbrent-cljs"
    ;                           :username "notbrent-cljs"
    ;                           :realname "brent vatne"
    ;                           :channels "#clojurescript"})
    ))

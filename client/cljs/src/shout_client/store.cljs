(ns shout-client.store)

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

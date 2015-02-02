(ns shout-devcards.core
  (:require-macros [devcards.core :refer [defcard is are= are-not=]])
  (:require [shout-client.core :refer [app connect-page sidebar handle-ui-actions!]]
            [devcards.core :as dc :include-macros true]
            [cognitect.transit :as t]
            [om-tools.core :refer-macros [defcomponent]]
            [om.core :as om :include-macros true]
            [sablono.core :as sab :include-macros true :refer-macros [html]]))

(enable-console-print!)

(devcards.core/start-devcard-ui!)
(devcards.core/start-figwheel-reloader!)

(defcomponent state-info
  [data owner]
  (render [_]
    (let [w (t/writer :json)]
      (html [:pre {} (t/write w (clj->js data))]))))

(defcard devcard-intro
  (dc/markdown-card
   "# Devcards for shout-cljs
    Experimenting with an interactive coding style"))

(defcard card-connect-page
  (dc/om-root-card connect-page {}))

(defcard card-sidebar-empty
  (dc/om-root-card sidebar {:networks []}))

(defcard card-sidebar-with-networks
  (dc/om-root-card sidebar {:networks [{:name "Freenode"
                                        :channels [{:name "#reactjs" :unread 80}
                                                   {:name "#clojurescript" :unread 0}]}
                                       {:name "Other"
                                        :channels [{:name "#somechan" :unread 5}
                                                   {:name "#otherchan" :unread 10}]}]}))

(defonce not-signed-in-state
  (let [state (atom {:networks [] :connect-form {:network-name "Freenode!"}})]
    (handle-ui-actions! "not-signed-in" state)
    state))

(defcard app-not-signed-in
  (dc/om-root-card app not-signed-in-state))

(defcard app-not-signed-in-state
  (dc/om-root-card state-info not-signed-in-state))

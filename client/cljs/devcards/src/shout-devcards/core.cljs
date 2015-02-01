(ns shout-devcards.core
  (:require-macros [devcards.core :refer [defcard is are= are-not=]])
  (:require [shout-client.core :refer [app connect-page sidebar]]
            [devcards.core :as dc :include-macros true]
            [om.core :as om :include-macros true]
            [sablono.core :as sab :include-macros true]))

(enable-console-print!)

(devcards.core/start-devcard-ui!)
(devcards.core/start-figwheel-reloader!)

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

(defcard app-not-signed-in
  (dc/om-root-card app {:networks []}))

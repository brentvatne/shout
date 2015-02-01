(ns shout-client.core
  (:require [sablono.core :refer-macros [html]]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :include-macros true]))

(def app-state (atom {}))

(defcomponent main
  [data owner]
  (render [_]
    (condp = (:active-screen data)
      :connect (om/build connect-page data))
      :chat (om/build chat-window)))

(defcomponent connect-page
  [data owner]
  (render [_]
    (html
      [:div {:id "connect-page"}
        [:h1 "Connect"]
        [:form {:id "connect-page-form"}
          [:h2 "Network settings"]
            [:input {:type "text" :name "network-name" :placeholder "Freenode"}]
            [:input {:type "text" :name "network-uri" :placeholder "irc.freenode.org"}]
            [:input {:type "text" :name "network-port" :placeholder "6697"}]
            [:input {:type "password" :name "network-password" :placeholder ""}]
          [:h2 "User preferences"]
            [:input {:type "text" :name "user-nick" :placeholder "notbrent"}]
            [:input {:type "text" :name "user-username" :placeholder "notbrent"}]
            [:input {:type "text" :name "user-real-name" :placeholder "Brent Vatne"}]
            [:input {:type "text" :name "user-channels" :placeholder "#clojurescript, #clojure, #reactjs, #ionic"}]
          [:input {:type "submit" :value "Connect"}]]])))

(defcomponent network-details
  [data owner]
  (render [_]
    (html [:div {:class "___"}
            (:name data)
            (doall (map (fn [channel]
                          [:div {:class "____"}
                            [:span {:class "channel-name"} (:name channel)]
                            [:span {:class "channel-unread-count"} (:unread channel)]])
                         (:channels data)))])))

(defcomponent sidebar-footer
  [data owner]
  (render [_]
    (html [:div {:id "sidebar-footer"}
           "sidebar footer goes here"])))

(defcomponent sidebar
  [data owner]
  (render [_]
    (html
      [:div {:id "sidebar"}
        (let [networks (:networks data)]
          (if (first networks)
            [:div {:class "__"}
              (om/build-all network-details networks)]
            [:div {:class "empty"}
              "You're not connected to any networks yet."]))
        (om/build sidebar-footer data)])))

(defcomponent app
  [data owner]
  (render [_]
    (html [:div {:id "app-container"}
           (om/build sidebar data)
           (om/build main data)])))

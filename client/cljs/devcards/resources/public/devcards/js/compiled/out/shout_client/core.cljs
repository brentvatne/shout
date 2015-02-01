(ns shout-client.core
  (:require [sablono.core :refer-macros [html]]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :include-macros true]))

(def app-state (atom {}))

(defcomponent connect-page
  [data owner]
  (render [_]
    (html [:div {:id "connect" :class "window"}
            [:div {:class "header"}
              [:button {:class "lt"}]]])))

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

(defcomponent sidebar
  [data owner]
  (render [_]
    (if-let [networks (:networks data)]
      (html [:div {:class "__"}
             (om/build-all network-details networks)])
      (html [:div {:class "empty"}
             "You're not connected to any networks yet."]))))

(defcomponent shout-app
  [data owner]
  (render [_]
    (html [:div {:id "wrap"}
            [:div {:id "viewport"}
              [:aside {:id "sidebar"}]
              [:div {:id "main"}
                (om/build connect-page {})]]])))

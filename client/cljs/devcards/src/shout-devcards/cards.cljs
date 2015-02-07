(ns shout-devcards.cards
  (:require-macros [devcards.core :refer [defcard is are= are-not=]])
  (:require [devcards.core :as dc :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om.core :as om :include-macros true]
            [sablono.core :as sab :include-macros true :refer-macros [html]]))


(defrecord OmRootCard [om-comp initial-state om-options devcard-options]
  IMount
  (mount [_ {:keys [node data-atom]}]
    (.log js/console "what")
    (.log js/console node)
    (om/root om-comp (dc/unbox-data-atom data-atom) (merge om-options {:target node})))
  IUnMount
  (unmount [_ {:keys [node]}]
    (dc/unmount-react node))
  IConfig
  (-options [_]
    (merge { :unmount-on-reload false
             :initial-state (dc/box-data-atom initial-state)}
           devcard-options)))

(defn om-root-card
  ([om-comp-fn initial-state om-options devcard-options]
     (OmRootCard. om-comp-fn initial-state om-options devcard-options))
  ([om-comp-fn initial-state om-options]
     (om-root-card om-comp-fn initial-state om-options {}))
  ([om-comp-fn initial-state]
     (om-root-card om-comp-fn initial-state {} {}))
  ([om-comp-fn]
     (om-root-card om-comp-fn {} {} {})))

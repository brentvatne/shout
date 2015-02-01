(ns test-devcards.core
    (:require
     [devcards.core :as dc :include-macros true]
     [om.core :as om :include-macros true]
     [sablono.core :as sab :include-macros true])
    (:require-macros
       [devcards.core :refer [defcard is are= are-not=]]))

(enable-console-print!)

(defcard two-zero-48-view 
  (dc/sab-card [:div.board
              [:div.cells
                 [:div {:class "cell xpos-1 ypos-1"} 4]
                 [:div {:class "cell xpos-1 ypos-2"} 2]
                 [:div {:class "cell xpos-1 ypos-3"} 8]]]))


;; remember to run lein figwheel and then browse to
;; http://localhost:3449/devcards/index.html


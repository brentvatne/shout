(ns test-devcards-devcards.core
    (:require
     ; [shout-client.core :refer [shout-app connect-to-server-page]]
     [devcards.core :as dc :include-macros true]
     [om.core :as om :include-macros true]
     [sablono.core :as sab :include-macros true])
    (:require-macros
     [devcards.core :refer [defcard is are= are-not=]]))

(enable-console-print!)
(println "wat")


(devcards.core/start-devcard-ui!)
(devcards.core/start-figwheel-reloader!)

(defcard devcard-intro
  (dc/markdown-card
   "# Devcards for test-devcards

    I can be found in `devcards_src/test_devcards_devcards/core.cljs`.

    If you add cards to this file, they will appear here on this page.

    You can add devcards to any file as long as you require
    `devcards.core` like so:

    ```
    (:require [devcards.core :as dc :include-macros true])
    ```

    As you add cards to other namspaces, those namspaces will
    be listed on the Devcards **home** page.

    <a href=\"https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs\" target=\"_blank\">Here are some Devcard examples</a>"))


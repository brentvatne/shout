(defproject shout-client "0.1.0-SNAPSHOT"
  :description "ClojureScript-based re-implementation of the Shout client side"
  :url "http://github.com/brentvatne/shout"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2725"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.8.7" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.12.2-3"]
                 [prismatic/om-tools "0.3.10"]
                 [ca.brentvatne/flux "0.1.1"]
                 [camel-snake-kebab "0.3.0"]
                 [com.cognitect/transit-cljs "0.8.202"]
                 [sablono "0.3.1"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]]

  :profiles { :dev {:dependencies [[devcards "0.1.2-SNAPSHOT"]]
                     :plugins [[lein-cljsbuild "1.0.3"]
                               [lein-figwheel "0.1.4-SNAPSHOT"]] }}

  :source-paths ["src" "target/classes"]

  :clean-targets ["resources/public/devcards/js/compiled/" "out/shout_client" "shout_client.js" "shout_client.min.js"]
  :cljsbuild {
    :builds [{:id "devcards"
              :source-paths ["devcards/src" "src"]
              :compiler {
                :output-to "devcards/resources/public/devcards/js/compiled/shout_devcards.js"
                :output-dir "devcards/resources/public/devcards/js/compiled/out"
                :optimizations :none
                :source-map true}}
             {:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "out/shout_client.js"
                :output-dir "out"
                :optimizations :none}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :output-to "out-adv/shout_client.min.js"
                :output-dir "out-adv"
                :optimizations :advanced
                :pretty-print false}}]}

  :resource-paths ["devcards/resources"]
  :figwheel {:css-dirs ["devcards/resources/public/css" "css"]})

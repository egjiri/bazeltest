load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")

package(default_visibility = ["//visibility:public"])

ts_config(
    name = "ts_config",
    src = ":tsconfig.json"
)

npm_link_all_packages(name = "node_modules")

copy_to_bin(
    name = "swcrc",
    srcs = [":.swcrc"],
)
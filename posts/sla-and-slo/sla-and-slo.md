SLA 与 SLO
===

看 [Angular with Bazel and Closure by Alex Eagle](https://www.youtube.com/watch?v=tnKyXH_5028) 时接触到一个术语 “SLO”（肯定不是中单 SOLO 的意思），有点懵圈。遂了解了一下。

￼<img width="638" alt="build_performance_benchmark" src="https://user-images.githubusercontent.com/3783096/43994497-72c2a3d8-9dd0-11e8-9711-41f710bc00fd.png">
*一张编译时的性能对比图-来自介绍 bazel 的演讲*

这里 SLO 表示 Service-level objectives，要了解 SLO 需要先了解 SLA。

Service-level agreement(SLA) 表示服务提供方与客户间的协议/合同。这里服务通常指 IT 服务，合同规定服务方交付的服务需要达到怎样的要求。

而这些具体的要求譬如软件性能，响应时间，稳定性，质量等，则由每一条对应的 SLA 来描述。

可以理解为 SLO 是 SLA 的集合，SLO 在服务提供方与客户间起到一种约束，防止纠纷，我理解也可以作为软件交付时验收的依据。

这里 SLA 不仅限于服务的提供方与客户，也可以是服务方与其他服务提供方之间的合同，比如你提供的 IT 服务里面依赖了一些三方的邮件，短信，云存储等服务。

回到 SLO，因为它是具体描述 SLA 中某个点的，比如性能。所以，它可以作为 benchmark 时的依据。如上面视频中的截图，编译性能。那么这里的 SLO 就表示项目编译时间随文件数量变化的优劣。

Bazel 想要达到的交付水准就是：对于任何数量级的项目，开发过程中文件变更后平均编译时间（Round Trip Time / RTT）不超过 2s，或保持在 2s 的理想水平。

如果达到了，说明这条 SLO 就满足了。

感觉上述这些术语，在外包场景下使用会很有效。外包型项目追求项目的交付，大多是需求层面的。如果像这样编写详尽的 SLO 指标，可减少甲乙双方扯皮的情况，流程上也会显得严谨规范。


### 相关资源

- [What is the difference between SLA (Service Level Agreement) and SLO (Service Level Objective)?](https://sqa.stackexchange.com/questions/22213/what-is-the-difference-between-sla-service-level-agreement-and-slo-service-le?newreg=eccd4c4a1c1a4bbca82e58b0fa8ceb30)

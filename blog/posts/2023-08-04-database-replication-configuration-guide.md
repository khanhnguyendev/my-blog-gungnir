---
layout: Post
title: "Database Replication Configuration Guide"
subtitle: Database Replication
author: khanhnguyen@dev
date: 2023-08-04
useHeaderImage: true
headerImage: /img/in-post/2023-08-04/database-replication-configuration-guide.png
headerMask: rgba(40, 57, 101, .9)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - database
  - configuration
  - guide
---

![Database Replication](/img/in-post/2023-08-04/database-replication-configuration-guide.png)

## Question

Slow query or timeout is a common problem when working with databases, affecting performance and user experience, and even leading to total system downtime. Let's explore solutions to solve this problem:

### Logical Optimization

Software logic optimizations such as query optimization and indexing are long-term and sustainable solutions for the entire system but require a considerable amount of time to implement and test.

### Hardware Expansion

In addition to software solutions, we need to consider increasing processing resources to improve database performance while minimizing logical changes. This solution offers quick responses and reduces risk, but it consumes more hardware resources compared to optimizing query serving logic.

This article will introduce solutions on hardware expansion to increase database performance.

### Principle and Design

In systems with a relatively small amount of data, read/write operations are typically performed on the same database as shown below:

![Principle and Design](/img/in-post/2023-08-04/database-replication-configuration-guide_1.png)

As the amount of data increases over time, the stability of the database becomes uncertain. To enhance the read and write performance of the database, in addition to optimizing queries and indexing, another solution is to create a copy of the database.

This redundancy provides failover capabilities when one of the database servers fails and can improve the availability, scalability, and overall performance of the database. Synchronizing data across multiple separate databases is known as replication.

MySQL, being a popular open-source relational database management system, comes pre-installed with some built-in replication features that allow us to maintain multiple copies of our data.

In this article, I will show you how to configure the MySQL instance on one server as the source database and then configure the MySQL instances on other servers to act as its replicas.

For this configuration, I have created 4 VMs running Ubuntu 20.04 with pre-installed MySQL with the following configuration:

![Principle and Design](/img/in-post/2023-08-04/database-replication-configuration-guide_2.png)

The function of each component is as follows:

- **mysql-master**: Acts as the source database where we can perform SQL statements like add, edit, delete, and retrieve data. The master database provides both read and write functionality and acts as the source of data synchronization to slave databases.

- **mysql-slave1, mysql-slave2**: Act as replicas of the source database **mysql-master**.

Haproxy/Proxy SQL Plays the role of a load balancer for the databases. To migrate from a system that shares a database to a replicated database, Haproxy requires the system to support connecting to multiple databases. Haproxy will rely on ports or IPs to route query commands from the system to the databases.

As for the SQL Proxy, there is no need to configure SQL Proxy since it can navigate to the databases based on the query command directly from the system. (More details about this setup will be discussed in the next post.)

Returning to the main topic of this article, we will start to configure the VM with the source database (mysql-master).
## Step 1: Adjust the source server firewall
SSH into **mysql-master** with ip address **35.240.187.215** . Opening port 3306 (the default port of mysql) allows the slaves to access to synchronize data from the master through this port. To open port 3306 you need to add this port to firewalls like on Sunteco Cloud or Security Group on other cloud platforms.

Next execute the command:

```cli
sudo ufw allow from replica_server_ip to any port 3306
```
## Step 2: Configure the source database (mysql-master)
## Step 3: Create accounts that allow access to data from replicated databases
## Step 4: Configure data synchronization from the source via binary log coordinates
## Step 5: Configure the replication database
## Step 6: Perform data synchronization test from source database (mysql-master) and replicas
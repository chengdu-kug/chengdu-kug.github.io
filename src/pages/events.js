import React from 'react';
import styles from "../styles/Events.module.css";


function Events() {
    const list = [
        {
            id: 1,
            title: "KotlinConf Global 分享会",
            content: 'github目前不支持切换中文，只能使用英文版，但是已经有了中文版的文档。 整站实现中文化，还需要一些时间，我们可以使用浏览器自带的翻译功能来实现浏览中文版的GitHub。 首页 视频教程 视频课程',
            createTime: '2022-03-03',
        },
        {
            id: 2,
            title: "如何无缝迁移",
            content: 'github目前不支持切换中文，只能使用英文版，但是已经有了中文版的文档。 整站实现中文化，还需要一些时间，我们可以使用浏览器自带的翻译功能来实现浏览中文版的GitHub。 首页 视频教程 视频课程',
            createTime: '2021-10-14',
        }
    ]

    return (
        <main className={styles.main}>
            <h1>Events</h1>
            {
                list.map((item, index) => {
                    return <div className={styles.events}>
                        <h3>{item.createTime}</h3>
                        <div className={styles.title}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="/">{item.title}</a>
                            <span>{item.content}</span>
                        </div>
                    </div>
                })
            }
        </main>
    );
}

export default Events;

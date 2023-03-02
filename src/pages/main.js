import React from 'react';
import styles from '../styles/Main.module.css'

function Main() {
    return (
        <div>
            <img src="/kug-logo.png" className="App-logo" alt="logo" />
            <div className={styles.content}>
                <h1>Chengdu Kotlin User Group</h1>
                <span>Hi, 这里是成都 Kotlin 用户组，欢迎所有对 Kotlin 感兴趣的开发者加入用户组</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div className={styles.grid}>
                    <a
                        href="/#/events"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            分享会
                            <img
                            src="/right.svg"
                            alt="bj_kug_right"
                            width={32}
                            height={32}
                        />
                        </h2>
                        <p>
                            Find in-depth information about Next.js features and&nbsp;API.
                        </p>
                    </a>

                    <a
                        href="/#/advance"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 >
                            Kotlin 进阶 <img
                            src="/right.svg"
                            alt="bj_kug_right"
                            width={32}
                            height={32}
                        />
                        </h2>
                        <p >
                            Learn about Next.js in an interactive course with&nbsp;quizzes!
                        </p>
                    </a>
                </div>
                <ul>
                    <li>在这里可以和其它成员一起讨论 Kotlin 语言的各项技术与最新特性</li>
                    <li>我们还会不定期举行分享会，进行与 Kotlin 相关的主题分享与讨论</li>
                    <li>联系我们：关注微信公众号“程序员江同学”，点击技术讨论，加入技术交流群</li>
                </ul>
            </div>

        </div>
    );
}

export default Main;

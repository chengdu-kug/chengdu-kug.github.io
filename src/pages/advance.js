import React from 'react';
import styles from "../styles/Events.module.css";

function Advance() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <h1>Kotlin 进阶学习材料</h1>

                <h3>Kotlin 协程</h3>
                <ul>
                    <li>
                        <a href="https://www.bennyhuo.com/book/kotlin-coroutines/">破解 Kotlin 协程专栏</a>
                    </li>
                    <li>
                        <a href="https://www.bennyhuo.com/book/bilibili/210730.html">Kotlin 协程视频教程</a>
                    </li>
                </ul>
                <h3>KMM (Kotlin Multiplatform Mobile)</h3>
                <ul>
                    <li>
                        <a href="https://coderyuan.com/categories/Kotlin/">KMM 环境搭建及入门教程</a>
                    </li>
                    <li>
                        <a href="https://www.bennyhuo.com/book/bilibili/210734.html">KMM 视频分享教程</a>
                    </li>
                </ul>

                <h3>Kotlin 元编程</h3>
                <ul>
                    <li>
                        <a href="https://www.bennyhuo.com/book/bilibili/74813.html">Kotlin 元编程 GDC 社区分享视频</a>
                    </li>
                    <li>
                        <a href="https://www.bennyhuo.com/book/bilibili/000000.html">Kotlin 注解处理器视频教程</a>
                    </li>
                    <li>
                        <a href="https://juejin.cn/post/7116305314529411085">别了 KAPT，使用 KSP 快速实现 ButterKnife</a>
                    </li>
                </ul>

                <h3>Kotlin 更新</h3>
                <ul>
                    <li>
                        <a href="https://www.bennyhuo.com/book/bilibili/62162.html">Kotlin 1.5 有哪些新内容？</a>
                    </li>
                    <li>
                        <a href="https://www.bennyhuo.com/book/bilibili/43306.html">Kotlin 1.6 有哪些新内容？</a>
                    </li>
                    <li>
                        <a href="https://www.bennyhuo.com/book/bilibili/399093.html">Kotlin 1.7 有哪些新内容？</a>
                    </li>
                </ul>
            </div>

        </main>
    );
}

export default Advance;

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">Студент</h2>
                <p className="about-me__student-name">Роман</p>
                <p className="about-me__description">Фронтенд-разработчик, 27 лет</p>
                <p className="about-me__text">
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
                <a className="about-me__link" href="http://facebook.com">Facebook</a>
                <a className="about-me__link" href="https://github.com/Rmn17">GitHub</a>
                <img className="about-me__photo" src="" alt="Student photography" />
            </div>
        </section>
    )
}

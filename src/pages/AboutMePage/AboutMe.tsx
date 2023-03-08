import React from 'react'
import { AboutMeContainer, Linking, PersonalInfo } from "./styles";

export const AboutMe = () => {
	return (
		<AboutMeContainer>
			<img src='/imgs/face.jpg' alt="me" />
			<PersonalInfo>
				<div className="name">Имя: Макиев Руслан</div>
				<ul><strong>Контактная информация</strong>
					<li>Телефон: +7-988-457-48-34</li>
					<li>Электронная почта: russellsoftit@gmail.com</li>
				</ul>
				<ul><strong>Профиль:</strong>
					<li>Цель: Получение должности junior frontend разработчика</li>
					<li>Сильные стороны: Знание JavaScript, TypeScript, Redux, Redux Thunk, Redux Saga, Axios, Ant Design и прочих библиотек, готовность к изучению новых технологий, быстрая обучаемость, коммуникабельность, организованность.</li>
				</ul>
				<ul><strong>Навыки:</strong>
					<li>Языки программирования: JavaScript, TypeScript</li>
					<li>Фреймворки: React, Redux</li>
					<li>Библиотеки: Redux Thunk, Redux Saga, Axios, Ant Design</li>
					<li>Системы контроля версий: Git</li>
					<li>Опыт работы с инструментами разработки: Webpack, Babel, ESLint</li>
				</ul>
				<ul>Дополнительная информация
					<li>Уровень английского языка: Выше среднего</li>
					<li>Хобби: Лыжный спорт</li>
				</ul>
				<Linking to="https://eloquent-salamander-5ae2c3.netlify.app/">Личный сайт</Linking><br />
				Благодарю за внимание к моему резюме и надеюсь на дальнейшее сотрудничество.
				
			</PersonalInfo>
		</AboutMeContainer>
	);
};
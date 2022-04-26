const data = {
	act_01: {
		pos: [
			{ top: 425, left: 206, num: 0, name: 'Сумрачное взморье', desc: '<div>Область: <span class="lloca">Сумрачное взморье</span></div><div>Убить босса (Хилок), для выхода в город</div>' },
			{ city: true, top: 351, left: 224, num: 0, name: 'Застава львинного глаза', desc: '<div>Область: <span class="lloca">Застава львинного глаза</span> (город)</div>' },
			{ top: 299, left: 243, num: 1, name: 'Побережье', desc: '<div>Область: <span class="lloca">Сумрачное взморье</span></div><div>Проходная локация</div>' },
			{ image: ['flask-image'], top: 325, left: 278, num: 'Р', name: 'Прибрежный остров', desc: '<div>Область: <span class="lloca">Прибрежный остров</span></div><div>После победы над босом получаем у Нессы в награду <span class="item">Ртутный флакон</span> и камень поддержки (камни поддержки этого уровня становятся доступны к покупке у Нессы)</div>' },
			{ top: 257, left: 268, num: 2, name: 'Илистые низины', desc: '<div>Область: <span class="lloca">Илистые низины</span></div><div>Убиваем большие группы монстров, собираем <span class="quest">3 ракушки</span> и открываем проход через водопад в следующую локацию (орентируясь на восклицательные знаки на мини карте)</div>' },
			{ image: ['point2-image'], top: 194, left: 241, num: 0, name: 'Смрадная заводь', desc: '<div>Область: <span class="lloca">Смрадная заводь</span></div><div>Убить всех монстров,по завершении зачистки даёт очки сброса пассивных навыков (необязательная локация)</div>' },
			{ top: 210, left: 320, num: 3, name: 'Сырой проход', desc: '<div>Область: <span class="lloca">Сырой проход</span></div><div>Найти подъём в верх на <span class="lloca">Утёс</span> в локации, также необходимо найти спуск похожий на пещеру для перехода в <span class="lloca">Залитый провал</span></div>' },
			{ image: ['point1-image'], top: 238, left: 369, num: 0, name: 'Залитый провал', desc: '<div>Область: <span class="lloca">Залитый провал</span></div><div>Убить уникального краба (награда очко пассивнх навыков)</div>' },
			{ top: 176, left: 363, num: 4, name: 'Утёс', desc: '<div>Область: <span class="lloca">Утёс</span></div><div>Проходная локация</div>' },
			{ top: 131, left: 278, num: 5, name: 'Склон', desc: '<div>Область: <span class="lloca">Склон</span></div><div>Проходная локация</div>' },
			{ image: ['laba-image'], top: 48, left: 260, num: 6, name: 'Тюрьма - уроврнь 1/2', desc: '<div>Область: <span class="lloca">Тюрьма</span></div><div>Переход в <span class="lloca">Тюремные помещения</span> --> <span class="lloca">Палаты смотретеля</span> (Локация без монстров. Следы крови приведут вас к входу на Арену)</div>' },
			{ top: 49, left: 332, num: 7, name: 'Врата заключённых', desc: '<div>Область: <span class="lloca">Врата заключённых</span></div><div>Уходим с основной дороги в одну из сторон и ищем проход к <span class="lloca">Кладбищу кораблей</span></div>' },
			{ image: ['point1-image'], top: 83, left: 409, num: 0, name: 'Грот погибших кораблей', desc: '<div>Область: <span class="lloca">Грот погибших кораблей</span></div><div>Найти предмет <span class="quest">Всепламень</span> и вернуться к "Фейргрейвса" (НПС на <span class="lloca">Кладбищу кораблей</span>)</div>' },
			{ top: 130, left: 418, num: 8, name: 'Кладбище кораблей', desc: '<div>Область: <span class="lloca">Кладбище кораблей</span></div><div>Найти вход в пещеру в корабле <span class="lloca">Грот погибщих кораблей</span></div>' },
			{ top: 93, left: 550, num: 9, name: 'Пещеры Мервейл', desc: '<div>Область: <span class="lloca">Пещеры Мервейл</span></div><div>Убить Мервейл. (Логово Мервейл (ур. 2))</div>' }
		]
	},
	act_02: {
		pos: [
			{ top: 348, left: 504.5, num: 0, name: 'Южный лес', desc: '<div>Область: <span class="lloca">Южный лес</span></div><div>Проходная локация</div>' },
			{ city: true, top: 270, left: 463, num: 0, name: 'Лесной лагерь', desc: '<div>Область: <span class="lloca">Лесной лагерь</span> (город)</div>' },
			{ top: 229, left: 504, num: 1, name: 'Страые поля', desc: '<div>Область: <span class="lloca">Страые поля</div><div>Содержит в себе локацию <span class="lloca">Берлога</span></div><div>Проходная локация</div>' },
			{ image: ['flask-image'], top: 185, left: 465, num: 'O', name: 'Берлога', desc: '<div>Область: <span class="lloca">Берлога</span></div><div>Стоит посетить, если есть необходимость во втором <span class="item">Ртутный флакон</span></div>' },
			{ top: 165, left: 541, num: 2, name: 'Перекрёсток', desc: '<div>Область: <span class="lloca">Перекрёсток</span></div><div>Проходная локация</div>' },
			{ top: 96, left: 565, num: 3, name: 'Разрушенный мост', desc: ' <div>Область: <span class="lloca">Разрушенный мост</span></div><div>Убить/помочь бандиту "Крайтин" (пропустите поход к Крайтину, если в вашем билде он должен выжить, необходимо посетить его в последнюю очередь)</div>' },
			{ image: ['laba-image'], top: 97, left: 474, num: 4, name: 'Обитель грехов', desc: '<div>Область: <span class="lloca">Обитель грехов</span></div><div>В данной области необходимо найти центр локации где находится портал, и от центра комнаты провести прямую через портал, в той стороне находится путь дальше. В <span class="lloca">Обителя грехов - уровень 2</span> в конце того самого длинного узкого коридора необходимо убить босса.</div>' },
			{ top: 227, left: 600, num: 0, name: 'Руины осквернённой святыни', desc: '<div>Область: <span class="lloca">Руины осквернённой святыни</span></div><div>Проходная локация</div>' },
			{ image: ['laba-image', 'point2-image image-bottom'], top: 236, left: 658, num: 'O', name: 'Склеп - уровень 1/2', desc: '<div>Область: <span class="lloca">Склеп - уровень 1</span> (лаберинт)</div><div>Область: <span class="lloca">Склеп - уровень 2</span></div><div>Найти предмет <span class="quest">Золотая Рука</span></div>' },
			{ top: 294, left: 358, num: 5, name: 'Пойма реки', desc: '<div>Область: <span class="lloca">Пойма реки</span></div><div>Проходная локация</div>' },
			{ top: 247, left: 187, num: 6, name: 'Западный лес', desc: '<div>Область: <span class="lloca">Западный лес</span></div><div>Движемся по дороге до упора убиваем группу солдат и забираем <span class="quest">Волшебный символ</span> для открытия пути в пути в первый акт и выполнения задания "Таркли" из 1 акта (награда пассивный поинт) Также смотрите с какой стороны от дороги находится портал, именно на этой стороне находится Алира. На противоположной находится Логово Ткачихи. (пропустите поход к Алире, если в вашем билде она должна выжить, необходимо посетить её в последнюю очередь)</div>' },
			{ top: 289, left: 211, num: 7, name: 'Покои Ткачихи', desc: '<div>Область: <span class="lloca">Покои Ткачихи</span></div><div>Убить ткачиху и забрать <span class="quest">Шип Малигаро</span></div>' },
			{ top: 231, left: 307, num: 8, name: 'Топь', desc: '<div>Область: <span class="lloca">Топь</span></div><div>Решаем вопросы с Дубом: убиваем, либо выбираем его, ищем вход в <span class="lloca">Руины ваал</span></div>' },
			{ top: 186, left: 274, num: 9, name: 'Руины ваал', desc: '<div>Область: <span class="lloca">Руины ваал</span></div><div>Проходная локация</div>' },
			{ top: 153, left: 221, num: 10, name: 'Северный лес', desc: '<div>Область: <span class="lloca">Северный лес</span></div><div>Проходная локация</div><div><span class="lloca">Чащоба</span> СКИПАЕМ</div>' },
			{ top: 181, left: 164, num: 0, name: 'Чащоба', desc: '<div>Область: <span class="lloca">Чащоба</span></div><div>(необязательная локация)</div>' },
			{ top: 69, left: 118, num: 11, name: 'Пещеры', desc: '<div>Область: <span class="lloca">Пещеры</span></div><div>Самое время завершить задание с бандитами, без предмета Верхушка вы дальше не пройдете, Верхушкой активирует алтарь, после убийства "Вседуши ваал" активируется портал в 3 акте, проход открывается через несколько секунд</div>' }
		]
	},
	act_03: {
		pos: [
			{ top: 331, left: 584, num: 0, name: 'Сарн', desc: '<div>Область: <span class="lloca">Сарн</span></div><div>Обязательно спасаем "Лариссу" от стражников. И говорим с ней!</div>' },
			{ city: true, top: 321, left: 403, num: 0, name: 'Лагерь сарна', desc: '<div>Область: <span class="lloca">Лагерь сарна</span> (город)</div>' },
			{ top: 267, left: 575, num: 1, name: 'Трущобы', desc: '<div>Область: <span class="lloca">Трущобы</span></div><div>Здесь мы очень скоро найдем вход в локацию <span class="lloca">Канализация</span>, которая пригодится нам чуть позже. Исследуем область, ищем вход в <span class="lloca">Крематорий</span>.</div>' },
			{ image: ['laba-image'], top: 267, left: 631, num: 2, name: 'Крематорий', desc: '<div>Область: <span class="lloca">Крематорий</span></div><div>После убийства "Веры" забираем <span class="quest">Браслет Толмана</span> возвращаемся в город за ключами от <span class="lloca">Канализация</span></div>' },
			{ top: 216, left: 542, num: '3/9', name: 'Канализация', desc: '<div>Область: <span class="lloca">Канализация</span></div><div>Собираем 3 <span class="quest">Бюста Гектора Титуция</span></div>' },
			{ top: 155.5, left: 518, num: 4, name: 'Рынок', desc: '<div>Область: <span class="lloca">Рынок</span></div><div>Проход в следующую локацию чаще всего в левой верхней части локации, по пути встречаем локацию <span class="lloca">Катакомбы</span></div>' },
			{ image: ['laba-image'], top: 140, left: 575, num: 0, name: 'Катакомбы', desc: '<div>Область: <span class="lloca">Катакомбы</span></div>' },
			{ top: 115, left: 418, num: 5, name: 'Передовая', desc: '<div>Область: <span class="lloca">Передовая</span></div><div>Активируем Портал (левая часть карты), недалеко от которого будет Сундук Черных стражей, содержащий предмет <span class="quest">Катушка для лент</span>, также ищем проход в <span class="lloca">Доки</span></div>' },
			{ top: 95, left: 343, num: 6, name: 'Доки', desc: '<div>Область: <span class="lloca">Доки</span></div><div>Ищем <span class="quest">Волшебную соль</span> в сундуке, отдаем соль "Диалле" в <span class="lloca">Храме солярис - уровень 2</span></div>' },
			{ top: 77, left: 489, num: 7, name: 'Храм Солярис - уровень 1', desc: '<div>Область: <span class="lloca">Храм Солярис - уровень 1</span></div><div>Ищем проход на уровень 2</div>' },
			{ top: 43, left: 441, num: 8, name: 'Храм Солярис - уровень 2', desc: '<div>Область: <span class="lloca">Храм Солярис - уровень 2</span></div><div>После беседы с "Диаллой" получаем амулет и <span class="quest">Пылающий Тальк</span>, возвращаемся в локацию <span class="lloca">Канализация</span> и используем Тальк на Бессмертной преграде.</div>' },
			{ top: 150, left: 253, num: 10, name: 'Лагерь Эбенового легиона', desc: '<div>Область: <span class="lloca">Лагерь Эбенового легиона</span></div><div>Движемся по лестницам в верх до <span class="lloca">Храма Лунарис</span> также по пути убиваем "Легата Гравиция" за победу над ним в городе можно получить камень умения на 28 уровень.</div>' },
			{ top: 141, left: 157, num: 11, name: 'Храм Лунарис - уровень 1/2', desc: '<div>Область: <span class="lloca">Храм Лунарис - уровень 1</span></div><div>Ищем проход на уровень 2</div><div>Область: <span class="lloca">Храм Лунарис - уровень 2</span></div><div>Убиваем "Веру" после поражения она вежливо оставит <span class="quest">Ключ от Перста Господня</span> он пригодится в <span class="lloca">Имперских садах</span></div>' },
			{ image: ['laba-image'], top: 105, left: 224, num: 12, name: 'Имперские сады', desc: '<div>Область: <span class="lloca">Имперские сады</span></div><div>Также локация имеет два прохода в <span class="lloca">Перст Господень</span> и <span class="lloca">Библиотека</span></div>' },
			{ top: 77, left: 184, num: 0, name: 'Библиотека', desc: '<div>Область: <span class="lloca">Библиотека</span></div><div>Необходима в том случае если вам нужны камни потдержки которые до 6 акта нигде не достать.(Призрак "Сиосы" находится рядом с порталом. Он даёт задание на сбор золотых страниц. В одной из комнат находится Шаткий подсвечник, открывающий вход в "Архивы")</div>' },
			{ top: 57, left: 244, num: 13, name: 'Перст Господень', desc: '<div>Область: <span class="lloca">Перст Господень</span></div><div>Проходная локация</div>Всего в области три этажа, похожих на овал. Портал на "Верхние этажи Перста Господня" (которые в свою очеред имеют также 3 этажа) находится в одном из углов на третьем этаже. На самом верху нас ждет эпичное сражение с "Владыкой". Первая стадия наносит огромный урон молнии. Вторая стадия накладывает кровотечение, которое советую снимать флаконом с соответствующим свойством.</div>' }
		]
	},
	act_04: {
		pos: [
			{ top: 418, left: 662, num: 0, name: 'Акведук', desc: '<div>Область: <span class="lloca">Акведук</span></div><div>Проходная локация</div>' },
			{ city: true, top: 320, left: 537, num: 0, name: 'Македы', desc: '<div>Область: <span class="lloca">Македы</span> (город)</div>' },
			{ top: 454, left: 271, num: 0, name: 'Высохшее озеро', desc: '<div>Область: <span class="lloca">Высохшее озеро</span></div><div>Побеждаем "Волла", забираем <span class="quest">Знамя Дешрет</span>, которое необходимо для открытия прохода в <span class="lloca">Шахты</span>, в городе. В награду за выполнение этого задания получаем камень умения на 34 уровень.</div>' },
			{ image: ['point1-image'], top: 235, left: 487, num: 2, name: 'Шахты - уровень 1/2', desc: '<div>Область: <span class="lloca">Шахты - уровень 1</span></div><div>Проходная локация</div><div>Область: <span class="lloca">Шахты - уровень 2</span></div><div>В этой области находится Дух Дешрет, являющийся частью задания Неукротимый дух. В его выполнении возникает лишь 1 проблема, это когда Дух Дешрет находится не по пути. (Но если вы не знаете локацию наизусть, то просто пылесосьте всё)</div>' },
			{ top: 200, left: 414, num: 3, name: 'Кристальная жила', desc: '<div>Область: <span class="lloca">Кристальная жила</span></div><div>Там находится 2 портала в <span class="lloca">Сон Каома</span> и <span class="lloca">Сон Дарессо</span> которых необходимо победить и забрать <span class="quest">Око желания</span> и <span class="quest">Око ярости</span> после отдать их "Диалле" и открыть проход в <span class="lloca">Брюхо Зверя - уровень 1</span></div>' },
			{ top: 118, left: 469, num: 4, name: 'Сон Дарессо', desc: '<div>Область: <span class="lloca">Сон Дарессо</span></div><div>В конце ждет большая яма гладиаторов с боссом и одной волной монстров.</div>' },
			{ top: 70, left: 405, num: 5, name: 'Великая Арена', desc: '<div>Область: <span class="lloca">Великая Арена</span></div><div>"Дарессо" имеет большой урон, будьте аккуратны. Каждые 25% здоровья он садится отдохнуть и неуязвим в это время (но можно наложить проклятье) Побеждаем "Дарессо", забираем <span class="quest">Око желания</span></div>' },
			{ top: 297, left: 251, num: 6, name: 'Сон Каома', desc: '<div>Область: <span class="lloca">Сон Каома</span></div><div>Проходная локация</div>' },
			{ top: 248, left: 164, num: 7, name: 'Крепость каома', desc: '<div>Область: <span class="lloca">Крепость каома</span></div><div>Локация где невозможно заблудиться, ибо все дороги ведут в Рим, точнее к Каому. Побеждаем "Каома", забираем <span class="quest">Око ярости</span></div>' },
			{ top: 162, left: 323, num: 8, name: 'Брюхо Зверя - уровень 1/2', desc: '<div>Область: <span class="lloca">Брюхо Зверя - уровень 1</span></div><div>Проходная локация Не забудьте флакон от кровотечения</div><div>Область: <span class="lloca">Брюхо Зверя - уровень 2</span></div><div>Битва с "Верой". Осторожно, вихри наносят большой урон, а луч накладывает кровотечение. Победив "Веру", она открывает проход далее</div>' },
			{ top: 117, left: 241, num: 9, name: 'Жатва', desc: '<div>Область: <span class="lloca">Жатва</span></div><div>Успешно собираем органы "Малахая", всего <span class="quest">3 органа</span> у трёх боссов, что находятся один в правой части локации прямо по тропе, и другие два слева в верхней и нижней части области. Отдаем органы "Вере", она открывает проход на арену. (Убиваем по очереди "Малахая" и "Веру" затем спускаемся на арену ниже. Убиваем "Малахая", убиваем правое сердце, убиваем Малахая, убиваем нижнее сердце, убиваем Малахая, убиваем верхнее сердце, убиваем Малахая") после движемся к <span class="lloca">Подъёму</span> </div>' },
			{ top: 127, left: 643, num: 10, name: 'Подъём', desc: '<div>Область: <span class="lloca">Подъём</span></div><div>Проходная локация Идем под дороге, через мост. Вверх до палаток и после влево </div>' }
		]
	},
	act_05: {
		pos: [
			{ top: 255, left: 55, num: 0, name: 'Узилище', desc: '' },
			{ city: true, top: 243, left: 136, num: 0, name: 'Башня надзирателя', desc: '' },
			{ image: ['point1-image'], top: 302, left: 195, num: 1, name: 'Изолятор', desc: '' },
			{ top: 188, left: 353, num: '2/6', name: 'Площадь/Разрушенная площадь', desc: '' },
			{ top: 383, left: 636, num: '3/5', name: 'Суды', desc: '' },
			{ top: 441, left: 582, num: 4, name: 'Обитель Невинности', desc: '' },
			{ top: 122, left: 606, num: 7, name: 'Костница', desc: '' },
			{ top: 104, left: 294, num: 8, name: 'Крыша собора', desc: '' },
			{ image: ['point1-image'], top: 363, left: 281, num: 0, name: 'Реликварий', desc: '' }
		]
	},
	act_06: {
		pos: [
			{ top: 455, left: 146, num: 0, name: 'Сумрачное взморье', desc: '' },
			{ city: true, top: 415, left: 163, num: 0, name: 'Застава Львиного глаза', desc: '' },
			{ top: 365, left: 168, num: 1, name: 'Побережье', desc: '' },
			{ top: 392, left: 204, num: 0, name: 'Прибрежный остров', desc: '' },
			{ top: 329, left: 199, num: 2, name: 'Илистые низины', desc: '' },
			{ image: ['point1-image'], top: 298, left: 150, num: 3, name: 'Крепость каруи', desc: '' },
			{ top: 226, left: 146, num: 4, name: 'Хребет', desc: '' },
			{ image: ['laba-image'], top: 168, left: 177, num: 5, name: 'Тюрма', desc: '' },
			{ image: ['point1-image image-bottom'], top: 167, left: 231, num: 6, name: 'Врата заключённых', desc: '' },
			{ top: 122, left: 240, num: 7, name: 'Западный лес', desc: '' },
			{ top: 149, left: 321, num: 8, name: 'Пойма реки', desc: '' },
			{ image: ['laba-image'], top: 103, left: 303, num: 0, name: 'Топь', desc: '' },
			{ top: 167, left: 393, num: 9, name: 'Южный лес', desc: '' },
			{ top: 212, left: 402, num: 10, name: 'Пещера злобы', desc: '' },
			{ top: 212, left: 474, num: 11, name: 'Маяк', desc: '' },
			{ top: 165, left: 630, num: 12, name: 'Риф Морского царя', desc: '' }
		]
	},
	act_07: {
		pos: [
			{ city: true, top: 184, left: 594, num: 0, name: 'Лагерь на мосту', desc: '' },
			{ image: ['flask-image'], top: 198, left: 542, num: 1, name: 'Разрушенный мост', desc: '' },
			{ top: 278, left: 515, num: 2, name: 'Перекрёсток', desc: '' },
			{ top: 350, left: 583, num: 3, name: 'Руины осквернённой святыни', desc: '' },
			{ image: ['laba-image'], top: 360, left: 652, num: 4, name: 'Склеп', desc: '' },
			{ image: ['laba-image'], top: 199, left: 436, num: 5, name: 'Обитель грехов - уровень 1/2', desc: '' },
			{ top: 168, left: 378, num: 6, name: 'Святилище Малигаро', desc: '' },
			{ top: 300, left: 425, num: 7, name: 'Берлога', desc: '' },
			{ image: ['point1-image'], top: 400, left: 423, num: 8, name: 'Пепельные поля', desc: '' },
			{ top: 265, left: 140, num: 9, name: 'Северный лес', desc: '' },
			{ image: ['point1-image'], top: 298, left: 73, num: 10, name: 'Чащоба', desc: '' },
			{ image: ['point1-image'], top: 170, left: 172, num: 11, name: 'Перешеек', desc: '' },
			{ top: 133, left: 126, num: 12, name: 'Город ваал', desc: '' },
			{ top: 113, left: 72, num: 13, name: 'Храм Разложения', desc: '' }
		]
	},
	act_08: {
		pos: [
			{ top: 374, left: 601, num: 0, name: 'Бастион сарна', desc: '' },
			{ city: true, top: 320, left: 402, num: 0, name: 'Лагерь Сарна', desc: '' },
			{ top: 249, left: 402, num: 1, name: 'Отравленные каналы', desc: '' },
			{ image: ['point1-image'], top: 231, left: 495, num: 2, name: 'Пристань', desc: '' },
			{ image: ['point1-image'], top: 214, left: 583, num: 3, name: 'Зерновые ворота', desc: '' },
			{ top: 135, left: 690, num: 4, name: 'Имперские поля', desc: '' },
			{ top: 70, left: 473, num: 5, name: 'Храм Солярис - уровень 1/2', desc: '' },
			{ top: 114, left: 417, num: 0, name: 'упс', desc: '' },
			{ top: 265, left: 244, num: 6, name: 'Роскошная набережная', desc: '' },
			{ image: ['laba-image'], top: 198, left: 249, num: 7, name: 'Купальни', desc: '' },
			{ image: ['point1-image'], top: 197, left: 180, num: 0, name: 'Висячие сады', desc: '' },
			{ top: 148, left: 252, num: 8, name: 'Площадь Лунарис', desc: '' },
			{ top: 140, left: 155, num: 9, name: 'Храм Лунарис', desc: '' },
			{ top: 163, left: 351, num: 10, name: 'Портовый мост', desc: '' }
		]
	}
}

function createElement(element, attribute, inner) {
	if (typeof element === 'undefined') return false
	if (typeof inner === 'undefined') inner = ''
	const el = document.createElement(element)
	if (typeof attribute === 'object')
		for (let key in attribute) {
			let attr = attribute[key]
			if (Object.prototype.toString.call(attr).includes('Object') && !Array.isArray(attr))
				attr = Object.entries(attr)
					.map(([k, v]) => [k + ': ' + v])
					.join('; ')
			el.setAttribute(key, attr)
		}
	if (!Array.isArray(inner)) inner = [inner]
	for (const key of inner) {
		if (key.tagName) el.appendChild(key)
		else el.appendChild(document.createTextNode(key))
	}
	return el
}

function text(node, textArray) {
	class TextScramble {
		constructor(el) {
			this.el = el
			this.chars = '!<>-_\\/[]{}—=+*^?#_'
			this.update = this.update.bind(this)
		}
		setText(newText) {
			const oldText = this.el.innerText
			const length = Math.max(oldText.length, newText.length)
			const promise = new Promise(resolve => (this.resolve = resolve))
			this.queue = []
			for (let i = 0; i < length; i++) {
				const from = oldText[i] || ''
				const to = newText[i] || ''
				const start = Math.floor(Math.random() * 100)
				const end = start + Math.floor(Math.random() * 100)
				this.queue.push({ from, to, start, end })
			}
			cancelAnimationFrame(this.frameRequest)
			this.frame = 0
			this.update()
			return promise
		}
		update() {
			let output = ''
			let complete = 0
			for (let i = 0, n = this.queue.length; i < n; i++) {
				let { from, to, start, end, char } = this.queue[i]
				if (this.frame >= end) {
					complete++
					output += to
				} else if (this.frame >= start) {
					if (!char || Math.random() < 0.28) {
						char = this.randomChar()
						this.queue[i].char = char
					}
					output += char
				} else {
					output += from
				}
			}
			this.el.innerHTML = output
			if (complete === this.queue.length) {
				this.resolve()
			} else {
				this.frameRequest = requestAnimationFrame(this.update)
				this.frame++
			}
		}
		randomChar() {
			return this.chars[Math.floor(Math.random() * this.chars.length)]
		}
	}
	const phrases = textArray
	const fx = new TextScramble(node)

	let counter = 0
	const next = () => {
		fx.setText(phrases[counter]).then(() => {
			setTimeout(next, 5000)
		})
		counter = (counter + 1) % phrases.length
	}

	next()
}
text(document.querySelector('.text-kadabra'), ['Быстрый левелинг по актам', 'Изи проход'])

function addImageProcess(src) {
	return new Promise((resolve, reject) => {
		let img = new Image()
		img.onload = resolve
		img.onerror = reject
		img.src = src
	})
}

document.addEventListener('DOMContentLoaded', function (e) {
	const menu = document.getElementById('act_menu')
	const act_img = document.getElementById('act_img')
	const points = document.getElementById('points')
	const desc = document.getElementById('desc')

	setTimeout(_ => {
		document.querySelector('[data-act="01"').click()
	}, 0)

	menu.addEventListener('click', async function (e) {
		e.preventDefault()
		if (e.target.tagName.toLowerCase() === 'a') {
			this.querySelector('a.active').classList.remove('active')
			e.target.classList.add('active')
			const act = e.target.dataset.act
			const act_data = `act_${act}`
			act_img.src = `img/${act}.jpg`
			await addImageProcess(`img/${act}.jpg`)
			desc.innerHTML = ''
			points.innerHTML = ''
			data[act_data]?.pos.map(el => {
				const span = createElement('span', { class: 'loca', 'data-toggle': 'tooltip', 'data-placement': 'top', style: { top: el.top + 'px', left: el.left + 'px' }, title: el.name }, el.num === 0 || el.num === undefined ? '' : el.num)
				if (el.image) {
					el.image.forEach(img => {
						span.append(createElement('span', { class: img }))
					})
				}
				if (el.city) {
					span.classList.add('city')
				}
				span.addEventListener('click', function () {
					desc.innerHTML = el.desc
					const cur = points.querySelector('#current')
					cur?.remove('current')
					this.append(createElement('div', { class: 'current', id: 'current' }, createElement('div', { class: 'circle' })))
				})
				points.append(span)
			})
			$('[data-toggle="tooltip"]').tooltip()
		}
	})
})

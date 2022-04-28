const data = {
	act_01: {
		pos: [
			{ top: 425, left: 206, num: 0, name: 'Сумрачное взморье', desc: '<div>Область: <span class="lloca">Сумрачное взморье</span></div><div>Убить босса (Хилок), для выхода в город</div>' },
			{ city: true, top: 351, left: 224, num: 0, name: 'Застава львинного глаза', desc: '<div>Область: <span class="lloca">Застава львинного глаза</span> (город)</div>' },
			{ top: 299, left: 243, num: 1, name: 'Побережье', desc: '<div>Область: <span class="lloca">Сумрачное взморье</span></div><div>Проходная локация</div>' },
			{ image: ['flask-image'], top: 325, left: 278, num: 0, name: 'Прибрежный остров', desc: '<div>Область: <span class="lloca">Прибрежный остров</span></div><div>После победы над босом получаем у Нессы в награду <span class="item">Ртутный флакон</span> и камень поддержки (камни поддержки этого уровня становятся доступны к покупке у Нессы)</div>' },
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
			{ image: ['flask-image'], top: 185, left: 465, num: 0, name: 'Берлога', desc: '<div>Область: <span class="lloca">Берлога</span></div><div>Стоит посетить, если есть необходимость во втором <span class="item">Ртутный флакон</span></div>' },
			{ top: 165, left: 541, num: 2, name: 'Перекрёсток', desc: '<div>Область: <span class="lloca">Перекрёсток</span></div><div>Проходная локация</div>' },
			{ top: 96, left: 565, num: 3, name: 'Разрушенный мост', desc: ' <div>Область: <span class="lloca">Разрушенный мост</span></div><div>Убить/помочь бандиту "Крайтин" (пропустите поход к Крайтину, если в вашем билде он должен выжить, необходимо посетить его в последнюю очередь)</div>' },
			{ image: ['laba-image'], top: 97, left: 474, num: 4, name: 'Обитель грехов', desc: '<div>Область: <span class="lloca">Обитель грехов</span></div><div>В данной области необходимо найти центр локации где находится портал, и от центра комнаты провести прямую через портал, в той стороне находится путь дальше. В <span class="lloca">Обителя грехов - уровень 2</span> в конце того самого длинного узкого коридора необходимо убить босса.</div>' },
			{ top: 227, left: 600, num: 0, name: 'Руины осквернённой святыни', desc: '<div>Область: <span class="lloca">Руины осквернённой святыни</span></div><div>Проходная локация</div>' },
			{ image: ['laba-image', 'point2-image image-bottom'], top: 236, left: 658, num: 0, name: 'Склеп - уровень 1/2', desc: '<div>Область: <span class="lloca">Склеп - уровень 1</span> (лаберинт)</div><div>Область: <span class="lloca">Склеп - уровень 2</span></div><div>Найти предмет <span class="quest">Золотая Рука</span></div>' },
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
			{ top: 95, left: 343, num: 6, name: 'Доки', desc: '<div>Область: <span class="lloca">Доки</span></div><div>Ищем <span class="quest">Волшебную соль</span> в сундуке, отдаём соль "Диалле" в <span class="lloca">Храме солярис - уровень 2</span></div>' },
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
			{ top: 117, left: 241, num: 9, name: 'Жатва', desc: '<div>Область: <span class="lloca">Жатва</span></div><div>Успешно собираем органы "Малахая", всего <span class="quest">3 органа</span> у трёх боссов, что находятся один в правой части локации прямо по тропе, и другие два слева в верхней и нижней части области. отдаём органы "Вере", она открывает проход на арену. (Убиваем по очереди "Малахая" и "Веру" затем спускаемся на арену ниже. Убиваем "Малахая", убиваем правое сердце, убиваем Малахая, убиваем нижнее сердце, убиваем Малахая, убиваем верхнее сердце, убиваем Малахая") после движемся к <span class="lloca">Подъёму</span> </div>' },
			{ top: 127, left: 643, num: 10, name: 'Подъём', desc: '<div>Область: <span class="lloca">Подъём</span></div><div>Проходная локация Идем под дороге, через мост. Вверх до палаток и после влево </div>' }
		]
	},
	act_05: {
		pos: [
			{ top: 255, left: 55, num: 0, name: 'Узилище', desc: '<div>Область: <span class="lloca">Узилище</span></div><div>Проходная локация</div>' },
			{ city: true, top: 243, left: 136, num: 0, name: 'Башня надзирателя', desc: '<div>Область: <span class="lloca">Башня надзирателя</span> (город)</div>' },
			{ image: ['point1-image'], top: 302, left: 195, num: 1, name: 'Изолятор', desc: '<div>Область: <span class="lloca">Изолятор</span></div><div>Желательно посетить левый верхний угол локации с целью получить <span class="quest">Мизаметр</span>, после находим боса и убиваем его, подбираем <span class="quest">Глаза фанатика</span></div>' },
			{ top: 188, left: 353, num: '2/6', name: 'Площадь Ориата', desc: '<div>Область: <span class="lloca">Площадь Ориата</span></div><div>От центра площади идём в правый верхний угол, через мост.</div>' },
			{ top: 383, left: 636, num: '3/5', name: 'Суды жрецов', desc: '<div>Область: <span class="lloca">Суды жрецов</span></div><div>Проходная локация</div>' },
			{ top: 441, left: 582, num: 4, name: 'Обитель Невинности', desc: '<div>Область: <span class="lloca">Обитель невинности</span></div><div>Область в основном линейная с небольшими боковыми выступами. Держимся левой стороны, там находится рецепт на скорость перемещения 3 уровня для обуви. Босс имеет 2 формы, в каждой из них по две стадии в промежутках между которыми убиваем волны монстров.</div>' },
			{ top: 122, left: 606, num: 7, name: 'Костница', desc: '<div>Область: <span class="lloca">Костница</span></div><div>Забираем <span class="quest">Символ чистоты</span> находящийся в саркофаге.</div>' },
			{ top: 104, left: 294, num: 8, name: 'Крыша собора', desc: '<div>Область: <span class="lloca">Крыша собора</span></div><div>Здесь необходимо убить "Китаву". Когда у "Китавы" остается 50% здоровья, он применяет свою ультимативную форму и уничтожает <span class="quest">Символ чистоты</span>. Мы теряем сознание, 30% всех сопротивлений стихий и хаоса, а так же немного нервов.</div>' },
			{ image: ['point1-image'], top: 363, left: 281, num: 0, name: 'Реликварий', desc: '<div>Область: <span class="lloca">Реликварий</span></div><div>В этой локаци необходимо собрать <span class="quest">Мучения Китавы</span> (награда 1 пассивное умение и 2 очка сброса)</div>' }
		]
	},
	act_06: {
		pos: [
			{ top: 455, left: 146, num: 0, name: 'Сумрачное взморье', desc: '<div>Область: <span class="lloca">Сумрачное взморье</span></div><div>По заданию "Лилии Рот" необходимо убить абсолютно всех монстров в этой локации и получить в награду 2 очка сброса, а также станет продавцом всех камней умений и поддержки 1 уровня</div>' },
			{ city: true, top: 415, left: 163, num: 0, name: 'Застава Львиного глаза', desc: '<div>Область: <span class="lloca">Застава Львиного глаза</span> (город)</div>' },
			{ top: 365, left: 168, num: 1, name: 'Побережье', desc: '<div>Область: <span class="lloca">Побережье</span></div><div>Проходная локация</div>' },
			{ top: 392, left: 204, num: 0, name: 'Прибрежный остров', desc: '<div>Область: <span class="lloca">Прибрежный остров</span></div><div>(Необязательная локация)</div>' },
			{ top: 329, left: 199, num: 2, name: 'Илистые низины', desc: '<div>Область: <span class="lloca">Илистые низины</span></div><div>В правом верхнем углу локации необходимо будет убить босса и подобрать <span class="quest">Око завоевателя</span>, с помощью которого открывается проход в левом верхнем углу (они все наносят кучу урона огнём, проверьте, что бы было 75% сопротивлений).</div>' },
			{ image: ['point1-image'], top: 298, left: 150, num: 3, name: 'Крепость каруи', desc: '<div>Область: <span class="lloca">Крепость каруи</span></div><div>Убиваем босса, забегая тотему опаляющего луча "за спину". После убиваем все 5 тотемов с синими лучами, дающие боссу неуязвимость. Выходим через левый выход, у которого часто стоит толпа, будьте готовы. Бежим в правый верхний угол.</div>' },
			{ top: 226, left: 146, num: 4, name: 'Хребет', desc: '<div>Область: <span class="lloca">Хребет</span></div><div>Линейная локация, не заблудитесь. Левый верхний угол наша цель.</div>' },
			{ image: ['laba-image'], top: 168, left: 177, num: 5, name: 'Тюрьма - уровень 1/2', desc: '<div>Область: <span class="lloca">Тюрьма - уровень 1 (Тюремное подземелье)</span></div><div>Проходная локация</div><div>Область: <span class="lloca">Тюрьма - уровень 2 (Башня Шаврони)</span></div><div>Область разделена на пять этажей. Лестница на четвертом этаже ведет на крышу, где проходит бой с боссом.</div>' },
			{ image: ['point1-image image-bottom'], top: 167, left: 231, num: 6, name: 'Врата заключённых', desc: '<div>Область: <span class="lloca">Врата заключенных</span></div><div>Локация содержит бога пантеона, нужно лишь сойти с дороги в проход. Можно убить сразу либо оставить на потом.</div>' },
			{ top: 122, left: 240, num: 7, name: 'Западный лес', desc: '<div>Область: <span class="lloca">Западный лес</span></div><div>Проходная локация</div>' },
			{ top: 149, left: 321, num: 8, name: 'Пойма реки', desc: '<div>Область: <span class="lloca">Пойма реки</span></div><div>Идём по дороге до портала, от него есть путь вверх в <span class="lloca">Топь</span>. Здесь находится Бог пантеона. Идём к нему сразу либо позже. (с ним шутки плохи, если у вас мало выживаемости).</div>' },
			{ image: ['point1-image'], top: 103, left: 303, num: 0, name: 'Топь', desc: '<div>Область: <span class="lloca">Топь</span></div><div>Здесь находится Бог пантеона. Идём к нему сразу либо позже. (с ним шутки плохи, если у вас мало выживаемости).</div>' },
			{ top: 167, left: 393, num: 9, name: 'Южный лес', desc: '<div>Область: <span class="lloca">Южный лес</span></div><div>Проходная локация</div>' },
			{ top: 212, left: 402, num: 10, name: 'Пещера злобы', desc: '<div>Область: <span class="lloca">Пещера злобы</span></div><div>Пропускаем болтовню русалки, не забываем взять <span class="quest">Флаг</span> и идём вперед.</div>' },
			{ top: 212, left: 474, num: 11, name: 'Маяк', desc: '<div>Область: <span class="lloca">Маяк</span></div><div>Там нас ждёт миссия сопровождения, 2 столбов, после сожжения флага плывём к <span class="lloca">Рифу Морского царя</span></div>' },
			{ top: 165, left: 630, num: 12, name: 'Риф Морского царя', desc: '<div>Область: <span class="lloca">Риф Морского царя</span></div><div>Сражение с босом. У босса всего 4 стадии по 25% хп. С каждой стадией арена становится меньше, и она наносит урон. В момент оглушения краба Несса призывает удары молнии, которые перед ударом подсвечивают зону поражения.</div>' }
		]
	},
	act_07: {
		pos: [
			{ city: true, top: 184, left: 594, num: 0, name: 'Лагерь на мосту', desc: '<div>Область: <span class="lloca">Лагерь на мосту</span> (город)</div>' },
			{ image: ['flask-image'], top: 198, left: 542, num: 1, name: 'Разрушенный мост', desc: '<div>Область: <span class="lloca">Разрушенный мост</span></div><div>Проходная локация</div>' },
			{ top: 278, left: 515, num: 2, name: 'Перекрёсток', desc: '<div>Область: <span class="lloca">Перекрёсток</span></div><div>Проходная локация основной орейнтир портал в центре локации</div>' },
			{ top: 350, left: 583, num: 3, name: 'Руины осквернённой святыни', desc: '<div>Область: <span class="lloca">Руины оскверненной святыни</span></div><div>Проходная локация бежим по тропе до входа в <span class="lloca">Склеп</span></div>' },
			{ image: ['laba-image'], top: 360, left: 652, num: 4, name: 'Склеп', desc: '<div>Область: <span class="lloca">Склеп - уровень 1</span></div><div>Находим саркофаг, в котором находится потайной ход во вторую часть локации, где находится сундук с <span class="quest">Картой Малигаро</span>.</div>' },
			{ image: ['laba-image'], top: 199, left: 436, num: 5, name: 'Обитель грехов - уровень 1/2', desc: '<div>Область: <span class="lloca">Обитель грехов - уровень 1</span></div><div>В центре Обители нас ждет портал и машина картоходца, в которую мы помещаем недавно полученную <span class="quest">Карту Малигаро.</span><div>Область: <span class="lloca">Обитель грехов - уровень 2</span></div><div>Необходимо найти коридор, в конце которого будет комната с потайным проходом, который можно открыть с помощью <span class="quest">Обсидианового ключа.</span></div>' },
			{ top: 168, left: 378, num: 6, name: 'Святилище Малигаро', desc: '<div>Область: <span class="lloca">Святилище Малигаро</span></div><div>У босса 3 стадии. Наносим 25% урона от его здоровья, он прячется и призывает питомца. В случае успешной победы с Малигаро выпадает <span class="quest">Чёрный яд</span> отдаём яд "Шёлку", получаем в замен <span class="quest">Обсидиановый ключ</span></div>' },
			{ top: 300, left: 425, num: 7, name: 'Берлога', desc: '<div>Область: <span class="lloca">Берлога</span></div><div>Проходная локация</div>' },
			{ image: ['point1-image'], top: 400, left: 423, num: 8, name: 'Пепельные поля', desc: '<div>Область: <span class="lloca">Пепельные поля</span></div><div>Активируем Портал, и от него по дороге бежим в левую часть локации. Нас ждет битва с боссом.</div>' },
			{ top: 265, left: 140, num: 9, name: 'Северный лес', desc: '<div>Область: <span class="lloca">Северный лес</span></div><div>В этой локации необходимо по левой стене пробежать всю локацию в поисках <span class="lloca">Чащобы</span> после сбора светлячков там движемся до <span class="lloca">Перешейка</span></div>' },
			{ image: ['point1-image'], top: 298, left: 73, num: 10, name: 'Чащоба', desc: '<div>Область: <span class="lloca">Чащоба</span></div><div>В этой локации мы собираем <span class="quest">Светлячков</span> 7 штук. Так же в локации есть Логово Груткул, за убийство которой Эрамир дает в награду +1 очко навыков. (можно пропустить, если пока не уверены в своих силах)</div>' },
			{ image: ['point1-image'], top: 170, left: 172, num: 11, name: 'Перешеек', desc: '<div>Область: <span class="lloca">Перешеек</span></div><div>В конце локации подбираем <span class="quest">Звезду Кишары</span>, которая находится в сундуке. В награду за её возвращение получаем у "Вейлама" +1 очко навыков</div>' },
			{ top: 133, left: 126, num: 12, name: 'Город ваал', desc: '<div>Область: <span class="lloca">Город ваал</span></div><div>Дойти до портала там и будет проход в следующую локацию</div>' },
			{ top: 113, left: 72, num: 13, name: 'Храм Разложения', desc: '<div>Область: <span class="lloca">Храм разложения - уровень 1</span></div><div>Проходная локация</div><div>Область: <span class="lloca">Храм разложения - уровень 2</span></div><div>Босс паучок, уберите арахнофобов от экрана. Всего 2 стадии. Когда остается 50% здоровья, она съедает "Шёлка", восстанавливая здоровье до 100%. От лучей из стен удобнее уворачиваться Рывком, от лучей из Араакали удобнее уворачиваться отходя в другую половину арены</div>' }
		]
	},
	act_08: {
		pos: [
			{ top: 374, left: 601, num: 0, name: 'Бастион сарна', desc: '<div>Область: <span class="lloca">Бастион Сарна</span></div><div>Проходная локация</div>' },
			{ city: true, top: 320, left: 402, num: 0, name: 'Лагерь Сарна', desc: '<div>Область: <span class="lloca">Лагерь Сарна</span> (город)</div>' },
			{ top: 249, left: 402, num: 1, name: 'Отравленные каналы', desc: '<div>Область: <span class="lloca">Отравленные каналы</span></div><div>Будьте осторожны, все монстры после смерти оставляют токсичную лужу, которая наносит постепенный урон хаосом. Не стойте на месте и пробегайте как можно быстрее до <span class="lloca">Сточная яма Доэдре</span></div><div>Босс - "Доэдре" стадий нет</div></div>' },
			{ image: ['point1-image'], top: 231, left: 495, num: 2, name: 'Пристань', desc: '<div>Область: <span class="lloca">Пристань</span></div><div>Ищем в начале <span class="quest">Анкх Вечности</span> его необходимо отнести на место воскрешения после победы над "Толманом" говорим с Лариссой и ищем выход к <span class="lloca">Зерновым воротам</span></div>' },
			{ image: ['point1-image'], top: 214, left: 583, num: 3, name: 'Зерновые ворота', desc: '<div>Область: <span class="lloca">Зерновые ворота</span></div><div>Не пропустите толпу больших солдат в черной броне. Крайне желательно их победить. В награду "Хадриан" дает +1 очко навыков</div>' },
			{ top: 135, left: 690, num: 4, name: 'Имперские поля', desc: '<div>Область: <span class="lloca">Имперские поля</span></div><div>Проходная локация</div>' },
			{ top: 70, left: 473, num: 5, name: 'Храм Солярис - уровень 1/2', desc: '<div>Область: <span class="lloca">Храм Солярис - уровень 1</span></div><div>Проходная локация</div><div>Область: <span class="lloca">Храм Солярис - уровень 2</span></div><div>После победы над боссом из сферы в центре выпадает <span class="quest">Сфера Солнца</span>. Обязательно забираем.</div>' },
			{ top: 114, left: 417, num: 0, name: 'Площадь Солярис', desc: '<div>Область: <span class="lloca">Площадь Солярис</span></div><div>Проходная локация</div>' },
			{ top: 265, left: 244, num: 6, name: 'Роскошная набережная', desc: '<div>Область: <span class="lloca">Роскошная набережная</span></div><div>Проходная локация</div>' },
			{ image: ['laba-image'], top: 198, left: 249, num: 7, name: 'Купальни', desc: '<div>Область: <span class="lloca">Купальни</span></div><div>В центре бегает дурачок, который охраняет <span class="quest">Крылья Вастири</span>. Желательно их забрать. Вверх и влево от места хранения крыльев есть проходы к испытанию Восхождения и к <span class="lloca">Висячим садам</span></div>' },
			{ image: ['point1-image'], top: 197, left: 180, num: 0, name: 'Висячие сады', desc: '<div>Область: <span class="lloca">Висячие сады</span></div><div>Коридорная локация с кучей ёжиков.</div>' },
			{ top: 148, left: 252, num: 8, name: 'Площадь Лунарис', desc: '<div>Область: <span class="lloca">Площадь Лунарис</span></div><div>Проходная локация, активируем портал и как орейнтир, в низ будет <span class="lloca">Портовый мост</span>, а вверх <span class="lloca">Храм Лунарис</span></div>' },
			{ top: 140, left: 155, num: 9, name: 'Храм Лунарис', desc: '<div>Область: <span class="lloca">Храм Лунарис - уровень 1</span></div><div>Проходная локация<div><span class="lloca">Храм Лунарис - уровень 2</span></div>После победы над боссом из сферы в центре выпадает <span class="quest">Сфера Луны</span> Обязательно забираем</div>' },
			{ top: 163, left: 351, num: 10, name: 'Портовый мост', desc: '<div>Область: <span class="lloca">Портовый мост</span></div><div>Проходная локация, а также здесь находится арена с босами "Лунарис" и "Солярис".</div><div>В центре локации находится арена с босом (3 стадии, достаточно у одной из них отнять 33% здоровья, и теперь они будут появляться по очереди после каждых потерянных 33% здоровья)</div>' }
		]
	},
	act_09: {
		pos: [
			{ top: 444, left: 314, num: 0, name: 'Кровавый акведук', desc: '<div>Область: <span class="lloca">Кровавый акведук</span></div><div>Проходная локация</div>' },
			{ city: true, top: 371, left: 214, num: 0, name: 'Македы', desc: '<div>Область: <span class="lloca">Македы</span> (город)</div>' },
			{ top: 283, left: 401, num: 1, name: 'Спуск', desc: '<div>Область: <span class="lloca">Спуск</span></div><div>Всего 3 этажа спуска.Пробегаем замерзшие земли из левой части локации в правую.</div>' },
			{ top: 446, left: 599, num: 2, name: 'Пустыня Вастири', desc: '<div>Область: <span class="lloca">Пустыня Вастири</span></div><div>Активируем портал и попутно ищем <span class="quest">Клинок Бури</span></div>' },
			{ image: ['point1-image'], top: 289, left: 711, num: 0, name: 'Оазис', desc: '<div>Область: <span class="lloca">Оазис</span></div><div>Добыв Клинок бури, отдаём его Петру и Иванне, и после беседы с Грехом забираем у Петра и Иванны <span class="quest">Закупоренную бурю</span> бежим вдоль стен до арены с босом. Убить "Шакари". 2 стадии. После потери трети здоровья прячется в песок, необходимо провести её до второй арены.</div>' },
			{ image: ['point2-image'], top: 245, left: 563, num: 3, name: 'Предгорье', desc: '<div>Область: <span class="lloca">Предгорье</span></div><div>В этой локации мы успешно бежим вдоль правой стены, до Портала, который обязательно активируем</div>' },
			{ top: 162, left: 518, num: 4, name: 'Кипящее озеро', desc: '<div>Область: <span class="lloca">Кипящее озеро</span></div><div>В этой локиции надо попасть в правую верхнюю часть, где находится бос. Побеждаем забираем <span class="quest">Кислоту василиска</span>(А также по пути может встретиться уникальный бык, убивайте, почему бы и нет)</div>' },
			{ image: ['laba-image'], top: 160, left: 429, num: 5, name: 'Тоннель', desc: '<div>Область: <span class="lloca">Тоннель</span></div><div>Проходная локация</div>' },
			{ image: ['point1-image image-bottom'], top: 134, left: 325, num: 6, name: 'Каменоломня', desc: '<div>Область: <span class="lloca">Каменоломня</span></div><div>Прямо в центре будет Портал и "Грех", если вы встретили лестницу наверх, заходим, нас ждет битва с "Гарухан"(бог пантеона), а также есть проход в следующую локацию <span class="lloca">Фабрика</span></div>' },
			{ top: 90, left: 343, num: 7, name: 'Фабрика', desc: '<div>Область: <span class="lloca">Фабрика</span></div><div>В этой локации мы любым доступным путём добираемся до правого верхнего угла области, где находится арена с боссом. После победы над ним открывается проход комнату, где находится машина с нужной нам <span class="quest">Тератновой пылью</span></div>' },
			{ top: 112, left: 133, num: 8, name: 'Брюхо Зверя', desc: '<div>Область: <span class="lloca">Брюхо Зверя</span></div><div>Проходная локация</div>' },
			{ top: 164, left: 62, num: 9, name: 'Гниющее нутро', desc: '<div>Область: <span class="lloca">Гниющее нутро</span></div><div>Здесь нас ждут 3 портала с босами: "Милигаро","Шавронь","Доэдрэ" победив всех 3 говорим с "Грехом" и он открывает нам проход в центре на арену. Бос "Порочная троица"  3 стадии по 25/25/50% здоровья. После потери четверти здоровья троица убегает и призывает 7 скорпионов. но при избытке урона боса можно убить за 1-2 стадии</div>' }
		]
	},
	act_10: {
		pos: [
			{ city: true, top: 41, left: 224, num: 0, name: 'Доки Ориата', desc: '<div>Область: <span class="lloca">Доки Ориата</span> (город)</div>' },
			{ top: 105, left: 294, num: 1, name: 'Крыша собора', desc: '<div>Область: <span class="lloca">Крыша собора</span></div><div>Прямо от входа идем вверх, на арене где сражались с Китавой нас ждет засада. Спасаем рядового Бэннона. Дальше бежим по крыше в правый нижний угол, вдоль верхней стороны крыши.</div>' },
			{ top: 189, left: 353, num: 2, name: 'Разорённая площадь', desc: '<div>Область: <span class="lloca">Разорённая площадь</span></div><div>Активируем портал и идем в Суды знакомою тропой (в правый угол).</div>' },
			{ image: ['laba-image', 'point2-image image-bottom'], top: 123, left: 606, num: 0, name: 'Костница', desc: '<div>Область: <span class="lloca">Костница</span></div>' },
			{ top: 188, left: 564, num: 5, name: 'Каналы', desc: '<div>Область: <span class="lloca">Каналы</span></div><div>Проходная локация</div>' },
			{ top: 181, left: 663, num: 6, name: 'Кормушка', desc: '<div>Область: <span class="lloca">Кормушка</span></div><div>В конце этой локации будет сражение с "Китавой" Китава имеет 3 стадии по 25/25/50% здоровья, и роняет своё сердце по 25/25/50% здоровья. Выпадающее сердце активно призывает монстров. после убийства "Китавы" беседа с Грехом откроет портал в Эпилог. У Ланиаты, за победу над Китавой получаем 2 очка навыков.</div>' },
			{ top: 384, left: 636, num: 3, name: 'Подожжонные суды', desc: '<div>Область: <span class="lloca">Подожженные суды</span></div><div>Проходная локация</div>' },
			{ top: 442, left: 582, num: 4, name: 'Осквернённая обитель', desc: '<div>Область: <span class="lloca">Оскверненная обитель</span></div><div>Убиваем боса и забираем <span class="quest">Посох Чистоты</span> Вернувшись в город отдаём эту палку "Бэннону", он превращается в успешную "Невинность".</div>' },
			{ top: 364, left: 281, num: 0, name: 'Реликварий', desc: '<div>Область: <span class="lloca">Реликварий</span></div>' },
			{ image: ['point1-image'], top: 303, left: 195, num: 0, name: 'Изолятор', desc: '<div>Область: <span class="lloca">Изолятор</span></div><div>В Изоляторе из правой части локации нужно добраться до левой верхней. Убить "Виленту". 3 стадии. После потери трети здоровья начинает бомбардировку. (каждый полет убирает иммунитет с трети здоровья, это на случай, если Вилента преждевременно отправится в полёт)</div>' }
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
	const desc = document.getElementById('desc')
	const points = document.getElementById('points')

	setTimeout(_ => {
		document.querySelector('[data-act="01"').click()
	}, 0)

	menu.addEventListener('click', async function (e) {
		e.preventDefault()
		if (e.target.tagName.toLowerCase() === 'a') {
			this.querySelector('a.active')?.classList.remove('active')
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

import mongoose from 'mongoose';
import articleModel from './models/articleModel.js';

mongoose.connect('mongodb://localhost:27017/vasyn_garden', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

async function createArticle() {
  const article1 = await new articleModel({
    imageArticle: 'potato.jpg',
    title: 'Памятка по хранению картофеля',
    text: [{
      paragraph: 'Картофель – второй хлеб. Сейчас, в сытости и достатке, пусть и с тотальной примесью пальмового масла, искусственных красителей и консервантов, идентичных натуральным, это определение несколько позабылось.',
    },
    {
      paragraph: 'Многие владельцы небольших участков целиком и полностью перешли на покупной картофель, что оправдано с экономической точки зрения. Зачем выращивать, если можно купить по доступной цене и о хранении даже не думать. К зиме, конечно, ценники на картофель в сетевых супермаркетах подрастают существенно, становясь в ряд с заграничными фруктами. Выручают поставки из полупустынных Израиля и Египта.',
    },
    {
      paragraph: 'Если Вы отважились на самостоятельное выращивание больших объемов картофеля и выступаете за полную продовольственную независимость своей семьи, постарайтесь избежать следующих ошибок при хранении:',
    },
    {
      paragraph: '1. Своевременно выкапывайте урожай. Созревшие, но вовремя невыкопанные клубни очень часто поражаются грибковыми инфекциями. Особенно это правило актуально для раннеспелых сортов. После сбора не забывайте предварительно подсушить картофель под навесом и очистить от грязи.',
    },
    {
      paragraph: '2. Выполняйте дезинфицирующую обработку погребов (после тщательного проветривания и просушки). Для обмазки используйте 5% медный купорос или хлорную известь (400 г на 10 л воды, настаивать 2 часа). Затем, после очередной просушки, выполните побелку негашеной известью, смешанной с медным купоросом 1 к 1 (1,5 кг смеси на 10 л воды). Наносить составы удобнее мочальной кистью. Белить следует не только стены и потолки, но и все деревянные поверхности. Пол достаточно просто посыпать известью.',
    },
    {
      paragraph: '3. Старайтесь отделять в хранилищах раннеспелые сорта от остальных. Первые даже при соблюдении идеальных условий начинают портиться раньше. В общих ящиках они к ноябрю-декабрю начнут активно прорастать и могут превратиться в очаги распространения грибковых инфекций. Именно по этой причине важно знать, что именно у Вас на огороде растет. Просто купить неизвестные магазинные сорта картофеля и засеять ими участок (или использовать для подсева среди прочего) – вариант плохой.',
    },
    {
      paragraph: '4. Перед закладкой в погреба тщательно проверяйте весь картофель и отсеивайте больные и поврежденные клубни. Их можно отложить отдельно дома или на лоджии и использовать в пищу в первое время. Что-то лучше сразу почистить и заморозить палочками в виде картофеля-фри. Зимой такой полуфабрикат будет хорошим подспорьем. Здоровые клубни сортируйте по размеру – мелкие, средние, крупные. Мелочь старайтесь использовать в пищу в первое время, пока кожица не сильно огрубела.',
    },
    {
      paragraph: '5. Старайтесь не хранить картофель совместно с другими овощами. Если нет свободного места, можно положить картофель вместе со свеклой. Последняя будет впитывать в себя излишнюю влагу, предотвращая гниение. Толщина слоя картофеля в закромах не должна превышать 1 м.',
    },
    {
      paragraph: '6. Собранный картофель – это живой организм, который при хранении дышит, поглощая кислород и выделяя в атмосферу углекислый газ, и постепенно расходует накопленные за время роста запасы питательных веществ. Чем активнее дыхание, тем выше их расход. Более размеренно и неторопливо картофельные клубни дышат при постоянной температуре от +2 до +4 C и относительной влажности воздуха в пределах от 80 до 85%. Прорастающие клубни дышат примерно в 2 раза активнее тех, что находятся в состоянии покоя, со всеми вытекающими из этого последствиями. Термометр в погребе – почти обязательное условие.',
    },
    {
      paragraph: '7. Время от времени перебирайте хранимый картофель, извлекая подпорченные клубни и те, что долгое время соприкасались с ними.',
    },
    {
      paragraph: 'Дополнить описанные пункты и поделиться своим личным опытом по этой важной теме с другими читателями Вы всегда можете в комментариях под статьей.',
    },
    ],
  });
  const article2 = await new articleModel({
    imageArticle: 'tomato.jpg',
    title: 'Окучивание помидоров в теплице',
    text: [{
      paragraph: 'К окучиванию тепличных помидоров огородники относятся по-разному. Сама процедура призвана подстегнуть формирование новых корешков, благодаря которым кусты получат дополнительное питание.',
    },
    {
      paragraph: 'Неоднозначная реакция исходит в первую очередь от огородников с территорий рискованного земледелия, где лето короткое. Пока посадишь рассаду к началу лета, пока она приживется (еще 2 недели), потом месяц развития до начала плодоношения (середина июля), потом еще 1 месяц или чуть больше сбора урожая, и уже сезон подходит к концу.',
    },
    {
      paragraph: 'Если выполнять окучивание, то нижняя часть стебля и даже листья, касающиеся земли, начнут укореняться. В этот период томаты будут уделять меньше внимания развитию вегетативной части, что отодвинет сроки начала плодоношения. Если время дорого, от окучивания лучше отказаться.',
    },
    {
      paragraph: 'Дачникам из средней полосы России (в условиях теплицы из поликарбоната), а особенно из южных регионов нашей страны, окучивание позволяет получить больший урожай.',
    },
    {
      paragraph: 'Корни у томатов растут с разной интенсивностью. Активизация происходит в начальный период укоренения после адаптации на новом месте, затем приоритет отдается активному наращиванию зеленой (вегетативной) массы. Перед началом цветения корни снова начинают ускоренно развиваться. После появления цветов растение перенаправляет основные ресурсы на формирование завязей.',
    },
    {
      paragraph: 'Когда же лучше окучивать? Об этом Вам подскажут сами растения. Как только у основания стебля появятся небольшие пупырышки (зачатки корней), выполните первое окучивание. Для этого используйте увлажненную землю, а не сухую.',
    },
    {
      paragraph: 'Второй раз окучить тепличные томаты нужно сразу после того, как часть их стебля, расположенная у земли, сменит цвет с насыщенно зеленого на синеватый.',
    },
    {
      paragraph: 'После окучиваний желательно мульчировать землю слоем полностью перепревшего навоза, рассыпчатого торфа или компоста.',
    },
    {
      paragraph: 'Если все сделать правильно, а главное своевременно, то Ваши помидоры нарастят максимально возможную корневую массу и обеспечат кусты необходимыми ресурсами для получения обильного урожая.',
    },
    {
      paragraph: 'При этом важно соблюдать и другие приемы – например, срывать плоды в стадии технической спелости и дозаривать их уже в коробках дома.',
    },
    {
      paragraph: 'Дополнить описанные пункты и поделиться своим личным опытом по этой важной теме с другими читателями Вы всегда можете в комментариях под статьей.',
    },
    ],
  })
  const article3 = await new articleModel({
    imageArticle: 'rose.jpg',
    title: 'Обязательно ли укрывать розы на зиму',
    text: [{
      paragraph: 'Потепление последних лет, если верить строчкам из «Евгения Онегина», не является чем-то из ряда вон выходящим. В начале 19 века в иные годы устойчивый снежный покров появлялся только в январе.',
    },
    {
      paragraph: 'Между тем ряд дачников уже вносят коррективы в зимнее укрытие ряда растений. Когда и без того тепло, дополнительная «одежка» может привести к ненужному выпреванию и распространению болезней грибной природы.',
    },
    {
      paragraph: 'Если говорить о розах, то в условиях климата Центральной России их комплексное укрытие на зиму и раньше было необязательной процедурой. Важно лишь как следует укрыть корневую шейку. Для этого достаточно присыпать ее сухой землей (можно использовать покупной грунт в пластиковых мешках, он всегда сухой, воздухопроницаемый, с торфяными примесями) или торфом.',
    },
    {
      paragraph: 'При таком подходе Вы не будете переживать о выпревании, если морозы, как часто это бывало в последние годы, опять не захотят приходить к нам до середины зимы.',
    },
    {
      paragraph: 'Важные осенние мероприятия:',
    },
    {
      paragraph: '1. Точки роста у роз следует обрезать садовым секатором еще в конце сентября, чтобы молодые побеги тратили оставшееся время не на рост, а на одревеснение и окончательное вызревание.',
    },
    {
      paragraph: '2. Плетистые розы, после того как морозы достигнут отметки в -5 C, следует аккуратно пригнуть к земле, закрепить и по возможности все-таки укрыть спанбондом в 2 слоя или хотя бы лапником для лучшего снегозадержания.',
    },
    {
      paragraph: '3. В ноябре, с приходом устойчивых умеренных морозов, необходимо обрезать и убрать все оставшиеся на розовых кустах листья. Таким образом, Вы устраните возможную основу для выпревания и гниения в продолжительные зимние оттепели.',
    },
    {
      paragraph: '4. После того, как выпадет снег (если до этого вообще дойдет), старайтесь поскорее подгребать его к Вашим розам.',
    },
    {
      paragraph: 'Важно понимать, что нет схем правильного или неправильного укрытия. У каждого дачника работает свой выработанный за годы практики метод. Кто-то из наших соседей и пленку применяет, и ничего у него под ней не выпревает.',
    },
    {
      paragraph: 'Дополнить описанные пункты и поделиться своим личным опытом по этой важной теме с другими читателями Вы всегда можете в комментариях под статьей.',
    },
    ],
  })
  const article4 = await new articleModel({
    imageArticle: 'tree.png',
    title: 'Влагозарядковый полив хвойных деревьев осенью',
    text: [{
      paragraph: 'Хвойные растения – одни из немногих, кто способен привносить на участок зеленые краски даже глубокой зимой, в самый пик свирепых русских морозов, когда кругом белым-бело.',
    },
    {
      paragraph: 'То тут, то там нет-нет, да и проглянет сквозь толщу пушистых снежных шапок нежная зеленая веточка туи или можжевельника, знаменуя собой неистребимую тягу к жизни и напоминая о неумолимо приближающемся лете.',
    },
    {
      paragraph: 'Сейчас, когда осень все еще не спешит передавать зиме свои права, пока земля окончательно не промерзла, но уже подходит к концу активный листопад важно выполнить влагозарядковый полив хвойников. Данная процедура особенно актуальна в сухую осень и позволяет растениям в достаточной степени запастись влагой перед предстоящей зимой.',
    },
    {
      paragraph: 'В зависимости от размеров колючего (и не очень) подопечного следует выливать в приствольный круг от 3 до 15 ведер воды. Некоторые садоводы предпочитают насыщать почву влагой постепенно на протяжении нескольких дней.',
    },
    {
      paragraph: 'В периоды длительных оттепелей, когда под прямыми солнечными лучами хвоя будет активнее испарять влагу, и промозглых зимних ветров, иссушающих все на своем пути, созданный осенью задел позволит не допустить полного пересыхания и пожелтения хвойников. Согласно ряду исследований за зиму хвойные деревья и кустарники теряют до 15% влаги.',
    },
    {
      paragraph: 'Влагозарядковый полив непосредственно перед приходом морозов позволит также уменьшить промерзание почвенного слоя. Там, где сухая земля промерзнет на 30 см, хорошо увлажненная станет безжизненной всего на 10 см. А это значит, что во втором случае у корней будет некоторый бонус до установления устойчивого снежного покрова.',
    },
    {
      paragraph: 'Чтобы влага лучше сохранялась в земле, приствольные круги желательно замульчировать. Для этого можно использовать опилки, кору и другую имеющуюся мульчу. Весной ее нужно будет вовремя отгрести, чтобы окружающая почва начала быстрее оттаивать и прогреваться.',
    },
    {
      paragraph: 'Для проверки необходимости влагозарядкового полива сделайте забор почвы на глубине в полтора штыка лопаты. Если сформированный ком земли в сжатой ладони легко рассыпается, земля сухая и нуждается в дополнительном увлажнении.',
    },
    {
      paragraph: 'Дополнить описанные пункты и поделиться своим личным опытом по этой важной теме с другими читателями Вы всегда можете в комментариях под статьей.',
    },
    ],
  })
  const article5 = await new articleModel({
    imageArticle: 'bow.jpg',
    title: 'Подкормка лука на репку',
    text: [{
      paragraph: 'Поскольку корневая система у репчатого лука развита слабо, возможность всасывать достаточное количество питательных веществ из скудных почв у нее пониженная. Если Вы хотите получить крупные головки, грядка изначально должна быть очень плодородной.',
    },
    {
      paragraph: 'Также важно отметить, что на итоговый результат оказывает сильное влияние уровень кислотности почвы. Если грунт будет кислым, даже при хороших изначальных заправках гряд достойного урожая можно не дождаться. Оптимальная реакция pH должна быть на уровне нейтральной, с незначительными отклонениями в ту или иную сторону.',
    },
    {
      paragraph: 'Не стоит забывать и о регулярных прополках с попутным поверхностным рыхлением. Крупный лук любит чистоту и порядок на грядках, не терпит тесноты и слежавшихся тяжелых почв вокруг себя.',
    },
    {
      paragraph: 'На бедных почвах лук желательно подкормить дважды:',
    },
    {
      paragraph: '1. В первый раз подкормку выполняют уже спустя 2 недели после появления на поверхности всходов. В 10 л воды растворяют 20 г аммиачной селитры + 25 г суперфосфата + 20 г сульфата калия. При желании аммиачную селитру можно заменить настоем коровяка (1 к 6) или птичьего помета (1 к 18). В обоих случаях на каждые 10 л готовой смеси добавляют 20 г суперфосфата и 15 г сульфата калия.',
    },
    {
      paragraph: '2. Во второй раз подкормить лук нужно в фазе начала образования луковиц. Здесь следует использовать калийно-фосфорные удобрения, которые улучшат качество луковиц и поспособствуют повышению их лежкости при длительном хранении после уборки урожая. На 10 л воды берут 30 г суперфосфата и 25 г сульфата калия. При желании калийную составляющую можно заменить 1 стаканом просеянной древесной золы.',
    },
    {
      paragraph: 'Во всех указанных случаях 1 ведра готовой подкормки хватит Вам для обработки луковых гряд площадью около 3 м2.',
    },
    {
      paragraph: 'За 3 недели до уборки урожая любые дополнительные подкормки и поливы следует полностью исключить. В этот период происходит окончательное дозревание луковиц.',
    },

    {
      paragraph: 'О необходимости уборки Вы сможете узнать по ряду признаков: луковые шейки утончатся, перья полягут, луковицы начнут покрываться чешуей. В жаркое засушливое лето это момент может наступить на 1-1,5 недели раньше привычных сроков.',
    },
    {
      paragraph: 'Дополнить описанные пункты и поделиться своим личным опытом по этой важной теме с другими читателями Вы всегда можете в комментариях под статьей.',
    },
    ],
  })
  const article6 = await new articleModel({
    imageArticle: 'carrot.jpg',
    title: 'Хранение мытой моркови',
    text: [{
      paragraph: 'Часто если зайти в овощной отдел ближайшего магазина, можно увидеть на стеллажах как мытую израильскую, так и немытую российскую морковку. Первая выглядит ладно, но как-то ненатурально, что ли, а наша, в грязи, более доступная по цене и такая родная, но требует дополнительной чистки и тщательного мытья. Напрашивается вопрос: а собранную с грядки морковку мыть?',
    },
    {
      paragraph: 'Сразу скажу, что среди огородников на этот счет единого мнения нет. Даже у ближайших соседей хранятся эти корнеплоды по-всякому.',
    },
    {
      paragraph: 'С учетом последующей хорошей сушки мыть морковь даже желательно. Дело в том, что на поверхностной грязи остаются возбудители болезней и различные вредители. Гниль может не проявиться поначалу, но через 6-7 месяцев разница будет в пользу мытой моркови.',
    },
    {
      paragraph: 'Заметим также, что мытье позволит лучше разглядеть незаметные под слоем грязи малейшие повреждения и признаки заболеваний, которые в дальнейшем могут стать очагами порчи. Благодаря этому Вы сразу сможете лучше рассортировать морковь на ту, которую нужно использовать в первые месяцы и ту, что можно подержать на хранении подольше.',
    },
    {
      paragraph: 'Согласитесь, зимой куда как приятнее будет достать чистую морковь без грязи и использовать для приготовления запланированных блюд, не отвлекаясь на усиленную чистку и сохраняя кожу рук и ногти (речь о хозяйках) в ухоженном опрятном состоянии.',
    },
    {
      paragraph: 'С другой стороны, если грязную морковку собрать в сухую погоду (неделя без дождей чтобы постояла), как следует просушить и положить на хранение в ящики в подвале, пересыпав песком, то к весне гнилушек будет минимальное количество. При этом лишней возни с мытьем не будет, что важно, если урожай большой. Да и грязь после хорошей просушки должна по большей части сама отвалиться, показав все тайны, которые скрывались под ней.',
    },
    {
      paragraph: 'Кроме того, при мытье нужно соблюдать аккуратность, так как кусочки грязи и песчинки могут повредить пока еще неогрубевшую кожуру собранной моркови, а это прямой путь к возникновению гнилей при хранении.',
    },
    {
      paragraph: 'У нас своей моркови растет всего пару грядок, поэтому мы ее после сбора моем под шлангом, как и молодой картофель. В этом году первую собранную партию уже натерли на терке и убрали в целлофановых пакетах в морозилку. В таком виде ее особенно удобно использовать при приготовлении блюд зимой, хотя было немного жаль свои «витамины» сразу замораживать',
    },
    {
      paragraph: 'Дополнить описанные пункты и поделиться своим личным опытом по этой важной теме с другими читателями Вы всегда можете в комментариях под статьей.',
    },
    ],
  })

  await article1.save();
  await article2.save();
  await article3.save();
  await article4.save();
  await article5.save();
  await article6.save();
}

createArticle();
import VegetModel from '../models/vegetModel.js';
import '../misc/db.js';

async function createInfo() {
  const veg1 = await new VegetModel({
    vegetableName: 'Арбуз',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '10-15',
        closedGround: '7-10',
      },
      temperature: '15-17',
    },
  });
  const veg2 = await new VegetModel({
    vegetableName: 'Баклажан',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '10-14',
        closedGround: '8-10',
      },
      temperature: '13-14',
    },
  });
  const veg3 = await new VegetModel({
    vegetableName: 'Бобы',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '4-8',
        closedGround: '3-5',
      },
      temperature: '3-4',
    },
  });
  const veg4 = await new VegetModel({
    vegetableName: 'Горох',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '4-7',
        closedGround: '3-5',
      },
      temperature: '4-6',
    },
  });
  const veg5 = await new VegetModel({
    vegetableName: 'Дыня',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '7-10',
        closedGround: '5-7',
      },
      temperature: '15-17',
    },
  });
  const veg6 = await new VegetModel({
    vegetableName: 'Кабачок. патиссон',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '7-8',
        closedGround: '4-6',
      },
      temperature: '10-12',
    },
  });
  const veg7 = await new VegetModel({
    vegetableName: 'Капуста б/к',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '4-6',
        closedGround: '3-5',
      },
      temperature: '2-3',
    },
  });
  const veg8 = await new VegetModel({
    vegetableName: 'Капуста цветная',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '4-6',
        closedGround: '3-5',
      },
      temperature: '2-3',
    },
  });
  const veg9 = await new VegetModel({
    vegetableName: 'Кукуруза сахарная',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '6-10',
        closedGround: '4-6',
      },
      temperature: '7-10',
    },
  });
  const veg10 = await new VegetModel({
    vegetableName: 'Лук',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '14-18',
        closedGround: '8-14',
      },
      temperature: '2-3',
    },
  });
  const veg11 = await new VegetModel({
    vegetableName: 'Лук-порей',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '20-22',
        closedGround: '10-12',
      },
      temperature: '12',
    },
  });
  const veg12 = await new VegetModel({
    vegetableName: 'Морковь',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '15-20',
        closedGround: '9-12',
      },
      temperature: '4-5',
    },
  });
  const veg13 = await new VegetModel({
    vegetableName: 'Огурец',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '5-8',
        closedGround: '4-6',
      },
      temperature: '13-15',
    },
  });
  const veg14 = await new VegetModel({
    vegetableName: 'Перец сладкий и острый',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '14-16',
        closedGround: '8-15',
      },
      temperature: '8-13',
    },
  });
  const veg15 = await new VegetModel({
    vegetableName: 'Редис',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '4-6',
        closedGround: '3-5',
      },
      temperature: '1-2',
    },
  });
  const veg16 = await new VegetModel({
    vegetableName: 'Редька',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '5-7',
        closedGround: '3-5',
      },
      temperature: '1-2',
    },
  });
  const veg17 = await new VegetModel({
    vegetableName: 'Салат',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '8-10',
        closedGround: '4-6',
      },
      temperature: '2-3',
    },
  });
  const veg18 = await new VegetModel({
    vegetableName: 'Свекла столовая',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '10-16',
        closedGround: '7-10',
      },
      temperature: '5-6',
    },
  });
  const veg19 = await new VegetModel({
    vegetableName: 'Сельдерей корневой',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '-',
        closedGround: '15-18',
      },
      temperature: '3-5',
    },
  });
  const veg20 = await new VegetModel({
    vegetableName: 'Помидоры томат',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '5-8',
        closedGround: '4-6',
      },
      temperature: '10-11',
    },
  });
  const veg21 = await new VegetModel({
    vegetableName: 'Тыква',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '7-8',
        closedGround: '4-6',
      },
      temperature: '10-12',
    },
  });
  const veg22 = await new VegetModel({
    vegetableName: 'Фасоль',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '6-10',
        closedGround: '4-7',
      },
      temperature: '10-12',
    },
  });
  const veg23 = await new VegetModel({
    vegetableName: 'Чеснок',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '10-17',
        closedGround: '-',
      },
      temperature: '2-5',
    },
  });
  const veg24 = await new VegetModel({
    vegetableName: 'Шпинат',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '8-12',
        closedGround: '-',
      },
      temperature: '1-2',
    },
  });
  const veg25 = await new VegetModel({
    vegetableName: 'Картофель',
    referenceInfo: {
      timeFromSowingToEmergence: {
        openGround: '8-12',
        closedGround: '-',
      },
      temperature: '1-2',
    },
  });

  await veg1.save();
  await veg2.save();
  await veg3.save();
  await veg4.save();
  await veg5.save();
  await veg6.save();
  await veg7.save();
  await veg8.save();
  await veg9.save();
  await veg10.save();
  await veg11.save();
  await veg12.save();
  await veg13.save();
  await veg14.save();
  await veg15.save();
  await veg16.save();
  await veg17.save();
  await veg18.save();
  await veg19.save();
  await veg20.save();
  await veg21.save();
  await veg22.save();
  await veg23.save();
  await veg24.save();
  await veg25.save();
}

createInfo();

	require('dotenv').config()
	require('./db');
	const LessonSchema = require('./models/Lesson');
// var x=[{
//     "_id": {
//       "$oid": "62791d68f90c50a22dd4b3a5"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח1",
//     "profession": "חשבון",
//     "day": "03/04/2022",
//     "time": "08:40",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a6"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a7"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a8"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a9"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3aa"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ab"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ac"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ad"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ae"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3af"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791dc3f90c50a22dd4b3b9"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח2",
//     "profession": "אנגלית",
//     "day": "03/04/2022",
//     "time": "08:39",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3ba"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bb"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bc"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bd"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3be"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bf"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c0"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c1"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c2"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791dfcf90c50a22dd4b3cd"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח3",
//     "profession": "תנ\"ך",
//     "day": "03/04/2022",
//     "time": "08:41",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3ce"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3cf"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d0"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d1"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d2"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d3"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d4"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d5"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d6"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791ec0f90c50a22dd4b3e1"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח1",
//     "profession": "היסטוריה",
//     "day": "03/04/2022",
//     "time": "10:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e2"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e3"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e4"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e5"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e6"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e7"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e8"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e9"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3ea"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3eb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791f3ef90c50a22dd4b3f5"
//     },
//     "teacherName": "ליאור סבוני",
//     "className": "ח2",
//     "profession": "ערבית",
//     "day": "03/04/2022",
//     "time": "10:26",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f6"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f7"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f8"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f9"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fa"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fb"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fc"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fd"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fe"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3ff"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791f7cf90c50a22dd4b409"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח3",
//     "profession": "אנגלית",
//     "day": "03/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b410"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b411"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b412"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b413"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791febf90c50a22dd4b41d"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח1",
//     "profession": "לשון",
//     "day": "03/04/2022",
//     "time": "12:24",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b41e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b41f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b420"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b421"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b422"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b423"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b424"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b425"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b426"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b427"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279206cf90c50a22dd4b431"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח2",
//     "profession": "תנ\"ך",
//     "day": "03/04/2022",
//     "time": "12:25",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b432"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b433"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b434"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b435"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b436"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b437"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b438"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b439"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b43a"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b43b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627920d0f90c50a22dd4b445"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח3",
//     "profession": "חשבון",
//     "day": "03/04/2022",
//     "time": "12:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b446"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b447"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b448"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b449"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44a"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44b"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44c"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44d"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44e"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44f"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627929ec77a4f7e4dbf3f079"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח1",
//     "profession": "אנגלית",
//     "day": "04/04/2022",
//     "time": "08:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07a"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07b"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07c"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07d"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07e"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07f"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f080"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f081"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f082"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f083"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792a3c77a4f7e4dbf3f08d"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח2",
//     "profession": "חשבון",
//     "day": "04/04/2022",
//     "time": "08:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f08e"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f08f"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f090"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f091"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f092"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f093"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f094"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f095"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f096"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f097"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792a8d77a4f7e4dbf3f0a1"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח3",
//     "profession": "היסטוריה",
//     "day": "04/04/2022",
//     "time": "08:29",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a2"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a3"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a4"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a5"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a6"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a7"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a8"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a9"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0aa"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0ab"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792b0777a4f7e4dbf3f0b5"
//     },
//     "teacherName": "גליה מוריוסף",
//     "className": "ח1",
//     "profession": "פיזיקה",
//     "day": "04/04/2022",
//     "time": "10:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b6"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b7"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b8"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b9"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0ba"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bb"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bc"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bd"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0be"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bf"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792ba777a4f7e4dbf3f0c9"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח2",
//     "profession": "היסטוריה",
//     "day": "04/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0ca"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cb"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cc"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cd"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0ce"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cf"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d0"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d1"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d2"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792c3f77a4f7e4dbf3f0dd"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח3",
//     "profession": "לשון",
//     "day": "04/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0de"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0df"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e0"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e1"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e2"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e3"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e4"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e5"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e6"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792cc677a4f7e4dbf3f0f1"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח1",
//     "profession": "תנ\"ך",
//     "day": "04/04/2022",
//     "time": "12:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f2"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f3"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f4"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f5"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f6"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f7"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f8"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f9"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0fa"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0fb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792d3277a4f7e4dbf3f106"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח2",
//     "profession": "לשון",
//     "day": "04/04/2022",
//     "time": "12:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f107"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f108"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f109"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10a"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10b"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10c"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10d"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10e"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10f"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f110"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792dbe77a4f7e4dbf3f11b"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח3",
//     "profession": "ספרות",
//     "day": "04/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11c"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11d"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11e"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11f"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f120"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f121"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f122"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f123"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f124"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f125"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f0c77a4f7e4dbf3f130"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח1",
//     "profession": "היסטוריה",
//     "day": "05/04/2022",
//     "time": "08:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f131"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f132"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f133"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f134"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f135"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f136"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f137"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f138"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f139"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f13a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f4077a4f7e4dbf3f144"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח2",
//     "profession": "חשבון",
//     "day": "05/04/2022",
//     "time": "08:22",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f145"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f146"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f147"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f148"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f149"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14a"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14b"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14c"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14d"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14e"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f7d77a4f7e4dbf3f159"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח3",
//     "profession": "ספרות",
//     "day": "05/04/2022",
//     "time": "08:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f160"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f161"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f162"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f163"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792fc977a4f7e4dbf3f16d"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח1",
//     "profession": "לשון",
//     "day": "05/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f16e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f16f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f170"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f171"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f172"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f173"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f174"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f175"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f176"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f177"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279301877a4f7e4dbf3f181"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח2",
//     "profession": "תנ\"ך",
//     "day": "05/04/2022",
//     "time": "10:28",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f182"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f183"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f184"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f185"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f186"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f187"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f188"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f189"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f18a"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f18b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279305277a4f7e4dbf3f196"
//     },
//     "teacherName": "אלון טמנו",
//     "className": "ח3",
//     "profession": "גיאוגרפיה",
//     "day": "05/04/2022",
//     "time": "10:33",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f197"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f198"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f199"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19a"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19b"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19c"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19d"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19e"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19f"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f1a0"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627930a677a4f7e4dbf3f1ab"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח1",
//     "profession": "ספרות",
//     "day": "05/04/2022",
//     "time": "12:30",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ac"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ad"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ae"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1af"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b0"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b1"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b2"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b3"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b4"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b5"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279312077a4f7e4dbf3f1bf"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח2",
//     "profession": "אנגלית",
//     "day": "05/04/2022",
//     "time": "12:21",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c0"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c1"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c2"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c3"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c4"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c5"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c6"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c7"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c8"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c9"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279319377a4f7e4dbf3f1d3"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח3",
//     "profession": "תנ\"ך",
//     "day": "05/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d4"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d5"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d6"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d7"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d8"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d9"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1da"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1db"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1dc"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1dd"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627932ef77a4f7e4dbf3f1e7"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח1",
//     "profession": "חשבון",
//     "day": "06/04/2022",
//     "time": "08:26",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1e8"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1e9"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ea"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1eb"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ec"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ed"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ee"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ef"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1f0"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1f1"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279333277a4f7e4dbf3f1fc"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח2",
//     "profession": "היסטוריה",
//     "day": "06/04/2022",
//     "time": "08:28",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1fd"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1fe"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1ff"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f200"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f201"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f202"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f203"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f204"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f205"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f206"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279337977a4f7e4dbf3f210"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח3",
//     "profession": "אנגלית",
//     "day": "06/04/2022",
//     "time": "08:30",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f211"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f212"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f213"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f214"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f215"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f216"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f217"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f218"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f219"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f21a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627933b077a4f7e4dbf3f224"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח1",
//     "profession": "אנגלית",
//     "day": "06/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f225"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f226"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f227"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f228"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f229"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22a"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22b"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22c"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22d"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22e"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627933ea77a4f7e4dbf3f238"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח2",
//     "profession": "לשון",
//     "day": "06/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f239"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23a"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23b"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23c"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23d"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23e"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23f"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f240"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f241"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f242"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279342177a4f7e4dbf3f24c"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח3",
//     "profession": "חשבון",
//     "day": "06/04/2022",
//     "time": "10:24",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24d"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24e"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24f"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f250"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f251"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f252"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f253"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f254"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f255"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f256"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279345277a4f7e4dbf3f260"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח1",
//     "profession": "תנ\"ך",
//     "day": "06/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f261"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f262"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f263"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f264"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f265"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f266"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f267"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f268"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f269"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f26a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627934ab77a4f7e4dbf3f275"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח2",
//     "profession": "ספרות",
//     "day": "06/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f276"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f277"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f278"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f279"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27a"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27b"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27c"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27d"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27e"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27f"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627934dc77a4f7e4dbf3f289"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח3",
//     "profession": "לשון",
//     "day": "06/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f290"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f291"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f292"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f293"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279361077a4f7e4dbf3f29d"
//     },
//     "teacherName": "גליה מוריוסף",
//     "className": "ח1",
//     "profession": "פיזיקה",
//     "day": "07/04/2022",
//     "time": "08:30",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f29e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f29f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a0"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a1"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a2"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a3"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a4"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a5"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a6"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279363b77a4f7e4dbf3f2b1"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח2",
//     "profession": "ספרות",
//     "day": "07/04/2022",
//     "time": "08:29",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b2"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b3"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b4"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b5"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b6"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b7"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b8"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b9"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2ba"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2bb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279368077a4f7e4dbf3f2c5"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח3",
//     "profession": "היסטוריה",
//     "day": "07/04/2022",
//     "time": "08:22",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c6"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c7"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c8"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c9"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2ca"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cb"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cc"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cd"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2ce"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cf"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627936ab77a4f7e4dbf3f2d9"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח1",
//     "profession": "ספרות",
//     "day": "07/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2da"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2db"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2dc"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2dd"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2de"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2df"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e0"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e1"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e2"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627936d577a4f7e4dbf3f2ed"
//     },
//     "teacherName": "ליאור סבוני",
//     "className": "ח2",
//     "profession": "ערבית",
//     "day": "07/04/2022",
//     "time": "10:29",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2ee"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2ef"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f0"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f1"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f2"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f3"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f4"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f5"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f6"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279371b77a4f7e4dbf3f301"
//     },
//     "teacherName": "אלון טמנו",
//     "className": "ח3",
//     "profession": "גיאוגרפיה",
//     "day": "07/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f302"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f303"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f304"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f305"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f306"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f307"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f308"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f309"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f30a"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f30b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791d68f90c50a22dd4b3a5b"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח1",
//     "profession": "חשבון",
//     "day": "10/04/2022",
//     "time": "08:40",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a6"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a7"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a8"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a9"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3aa"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ab"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ac"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ad"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ae"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3af"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791dc3f90c50a22dd4b3b9b"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח2",
//     "profession": "אנגלית",
//     "day": "10/04/2022",
//     "time": "08:39",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3ba"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bb"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bc"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bd"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3be"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bf"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c0"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c1"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c2"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791dfcf90c50a22dd4b3cdb"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח3",
//     "profession": "תנ\"ך",
//     "day": "10/04/2022",
//     "time": "08:41",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3ce"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3cf"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d0"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d1"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d2"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d3"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d4"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d5"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d6"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791ec0f90c50a22dd4b3e1b"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח1",
//     "profession": "היסטוריה",
//     "day": "10/04/2022",
//     "time": "10:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e2"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e3"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e4"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e5"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e6"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e7"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e8"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e9"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3ea"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3eb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791f3ef90c50a22dd4b3f5b"
//     },
//     "teacherName": "ליאור סבוני",
//     "className": "ח2",
//     "profession": "ערבית",
//     "day": "10/04/2022",
//     "time": "10:26",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f6"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f7"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f8"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f9"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fa"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fb"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fc"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fd"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fe"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3ff"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791f7cf90c50a22dd4b409b"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח3",
//     "profession": "אנגלית",
//     "day": "10/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b410"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b411"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b412"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b413"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791febf90c50a22dd4b41db"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח1",
//     "profession": "לשון",
//     "day": "10/04/2022",
//     "time": "12:24",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b41e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b41f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b420"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b421"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b422"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b423"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b424"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b425"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b426"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b427"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279206cf90c50a22dd4b431b"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח2",
//     "profession": "תנ\"ך",
//     "day": "10/04/2022",
//     "time": "12:25",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b432"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b433"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b434"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b435"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b436"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b437"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b438"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b439"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b43a"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b43b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627920d0f90c50a22dd4b445b"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח3",
//     "profession": "חשבון",
//     "day": "10/04/2022",
//     "time": "12:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b446"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b447"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b448"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b449"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44a"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44b"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44c"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44d"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44e"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44f"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627929ec77a4f7e4dbf3f079b"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח1",
//     "profession": "אנגלית",
//     "day": "11/04/2022",
//     "time": "08:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07a"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07b"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07c"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07d"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07e"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07f"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f080"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f081"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f082"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f083"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792a3c77a4f7e4dbf3f08db"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח2",
//     "profession": "חשבון",
//     "day": "11/04/2022",
//     "time": "08:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f08e"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f08f"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f090"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f091"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f092"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f093"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f094"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f095"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f096"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f097"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792a8d77a4f7e4dbf3f0a1b"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח3",
//     "profession": "היסטוריה",
//     "day": "11/04/2022",
//     "time": "08:29",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a2"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a3"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a4"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a5"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a6"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a7"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a8"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a9"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0aa"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0ab"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792b0777a4f7e4dbf3f0b5b"
//     },
//     "teacherName": "גליה מוריוסף",
//     "className": "ח1",
//     "profession": "פיזיקה",
//     "day": "11/04/2022",
//     "time": "10:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b6"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b7"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b8"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b9"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0ba"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bb"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bc"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bd"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0be"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bf"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792ba777a4f7e4dbf3f0c9b"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח2",
//     "profession": "היסטוריה",
//     "day": "11/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0ca"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cb"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cc"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cd"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0ce"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cf"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d0"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d1"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d2"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792c3f77a4f7e4dbf3f0ddb"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח3",
//     "profession": "לשון",
//     "day": "11/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0de"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0df"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e0"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e1"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e2"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e3"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e4"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e5"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e6"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792cc677a4f7e4dbf3f0f1b"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח1",
//     "profession": "תנ\"ך",
//     "day": "11/04/2022",
//     "time": "12:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f2"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f3"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f4"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f5"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f6"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f7"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f8"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f9"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0fa"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0fb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792d3277a4f7e4dbf3f106b"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח2",
//     "profession": "לשון",
//     "day": "11/04/2022",
//     "time": "12:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f107"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f108"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f109"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10a"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10b"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10c"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10d"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10e"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10f"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f110"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792dbe77a4f7e4dbf3f11bb"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח3",
//     "profession": "ספרות",
//     "day": "11/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11c"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11d"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11e"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11f"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f120"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f121"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f122"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f123"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f124"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f125"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f0c77a4f7e4dbf3f130b"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח1",
//     "profession": "היסטוריה",
//     "day": "12/04/2022",
//     "time": "08:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f131"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f132"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f133"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f134"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f135"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f136"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f137"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f138"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f139"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f13a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f4077a4f7e4dbf3f144b"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח2",
//     "profession": "חשבון",
//     "day": "12/04/2022",
//     "time": "08:22",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f145"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f146"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f147"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f148"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f149"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14a"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14b"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14c"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14d"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14e"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f7d77a4f7e4dbf3f159b"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח3",
//     "profession": "ספרות",
//     "day": "12/04/2022",
//     "time": "08:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f160"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f161"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f162"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f163"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792fc977a4f7e4dbf3f16db"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח1",
//     "profession": "לשון",
//     "day": "12/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f16e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f16f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f170"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f171"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f172"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f173"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f174"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f175"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f176"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f177"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279301877a4f7e4dbf3f181b"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח2",
//     "profession": "תנ\"ך",
//     "day": "12/04/2022",
//     "time": "10:28",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f182"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f183"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f184"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f185"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f186"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f187"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f188"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f189"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f18a"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f18b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279305277a4f7e4dbf3f196b"
//     },
//     "teacherName": "אלון טמנו",
//     "className": "ח3",
//     "profession": "גיאוגרפיה",
//     "day": "12/04/2022",
//     "time": "10:33",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f197"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f198"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f199"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19a"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19b"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19c"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19d"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19e"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19f"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f1a0"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627930a677a4f7e4dbf3f1abb"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח1",
//     "profession": "ספרות",
//     "day": "12/04/2022",
//     "time": "12:30",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ac"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ad"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ae"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1af"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b0"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b1"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b2"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b3"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b4"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b5"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279312077a4f7e4dbf3f1bfb"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח2",
//     "profession": "אנגלית",
//     "day": "12/04/2022",
//     "time": "12:21",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c0"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c1"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c2"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c3"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c4"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c5"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c6"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c7"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c8"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c9"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279319377a4f7e4dbf3f1d3b"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח3",
//     "profession": "תנ\"ך",
//     "day": "12/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d4"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d5"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d6"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d7"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d8"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d9"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1da"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1db"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1dc"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1dd"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627932ef77a4f7e4dbf3f1e7b"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח1",
//     "profession": "חשבון",
//     "day": "13/04/2022",
//     "time": "08:26",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1e8"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1e9"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ea"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1eb"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ec"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ed"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ee"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ef"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1f0"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1f1"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279333277a4f7e4dbf3f1fcb"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח2",
//     "profession": "היסטוריה",
//     "day": "13/04/2022",
//     "time": "08:28",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1fd"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1fe"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1ff"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f200"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f201"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f202"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f203"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f204"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f205"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f206"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279337977a4f7e4dbf3f210b"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח3",
//     "profession": "אנגלית",
//     "day": "13/04/2022",
//     "time": "08:30",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f211"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f212"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f213"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f214"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f215"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f216"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f217"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f218"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f219"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f21a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627933b077a4f7e4dbf3f224b"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח1",
//     "profession": "אנגלית",
//     "day": "13/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f225"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f226"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f227"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f228"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f229"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22a"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22b"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22c"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22d"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22e"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627933ea77a4f7e4dbf3f238b"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח2",
//     "profession": "לשון",
//     "day": "13/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f239"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23a"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23b"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23c"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23d"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23e"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23f"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f240"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f241"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f242"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279342177a4f7e4dbf3f24cb"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח3",
//     "profession": "חשבון",
//     "day": "13/04/2022",
//     "time": "10:24",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24d"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24e"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24f"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f250"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f251"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f252"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f253"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f254"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f255"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f256"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279345277a4f7e4dbf3f260b"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח1",
//     "profession": "תנ\"ך",
//     "day": "13/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f261"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f262"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f263"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f264"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f265"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f266"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f267"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f268"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f269"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f26a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627934ab77a4f7e4dbf3f275b"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח2",
//     "profession": "ספרות",
//     "day": "13/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f276"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f277"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f278"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f279"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27a"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27b"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27c"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27d"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27e"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27f"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627934dc77a4f7e4dbf3f289b"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח3",
//     "profession": "לשון",
//     "day": "13/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f290"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f291"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f292"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f293"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279361077a4f7e4dbf3f29db"
//     },
//     "teacherName": "גליה מוריוסף",
//     "className": "ח1",
//     "profession": "פיזיקה",
//     "day": "14/04/2022",
//     "time": "08:30",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f29e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f29f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a0"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a1"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a2"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a3"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a4"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a5"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a6"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279363b77a4f7e4dbf3f2b1b"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח2",
//     "profession": "ספרות",
//     "day": "14/04/2022",
//     "time": "08:29",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b2"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b3"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b4"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b5"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b6"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b7"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b8"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b9"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2ba"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2bb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279368077a4f7e4dbf3f2c5b"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח3",
//     "profession": "היסטוריה",
//     "day": "14/04/2022",
//     "time": "08:22",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c6"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c7"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c8"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c9"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2ca"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cb"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cc"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cd"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2ce"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cf"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627936ab77a4f7e4dbf3f2d9b"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח1",
//     "profession": "ספרות",
//     "day": "14/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2da"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2db"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2dc"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2dd"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2de"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2df"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e0"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e1"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e2"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627936d577a4f7e4dbf3f2edb"
//     },
//     "teacherName": "ליאור סבוני",
//     "className": "ח2",
//     "profession": "ערבית",
//     "day": "14/04/2022",
//     "time": "10:29",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2ee"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2ef"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f0"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f1"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f2"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f3"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f4"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f5"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f6"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279371b77a4f7e4dbf3f301b"
//     },
//     "teacherName": "אלון טמנו",
//     "className": "ח3",
//     "profession": "גיאוגרפיה",
//     "day": "14/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f302"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f303"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f304"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f305"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f306"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f307"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f308"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f309"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f30a"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f30b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791d68f90c50a22dd4b3a5c"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח1",
//     "profession": "חשבון",
//     "day": "17/04/2022",
//     "time": "08:40",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a6"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a7"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a8"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a9"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3aa"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ab"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ac"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ad"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ae"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3af"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791dc3f90c50a22dd4b3b9c"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח2",
//     "profession": "אנגלית",
//     "day": "17/04/2022",
//     "time": "08:39",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3ba"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bb"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bc"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bd"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3be"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bf"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c0"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c1"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c2"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791dfcf90c50a22dd4b3cdc"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח3",
//     "profession": "תנ\"ך",
//     "day": "17/04/2022",
//     "time": "08:41",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3ce"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3cf"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d0"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d1"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d2"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d3"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d4"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d5"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d6"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791ec0f90c50a22dd4b3e1c"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח1",
//     "profession": "היסטוריה",
//     "day": "17/04/2022",
//     "time": "10:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e2"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e3"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e4"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e5"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e6"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e7"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e8"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e9"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3ea"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3eb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791f3ef90c50a22dd4b3f5c"
//     },
//     "teacherName": "ליאור סבוני",
//     "className": "ח2",
//     "profession": "ערבית",
//     "day": "17/04/2022",
//     "time": "10:26",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f6"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f7"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f8"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f9"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fa"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fb"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fc"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fd"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fe"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3ff"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791f7cf90c50a22dd4b409c"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח3",
//     "profession": "אנגלית",
//     "day": "17/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b410"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b411"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b412"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b413"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791febf90c50a22dd4b41dc"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח1",
//     "profession": "לשון",
//     "day": "17/04/2022",
//     "time": "12:24",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b41e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b41f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b420"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b421"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b422"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b423"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b424"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b425"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b426"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b427"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279206cf90c50a22dd4b431c"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח2",
//     "profession": "תנ\"ך",
//     "day": "17/04/2022",
//     "time": "12:25",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b432"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b433"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b434"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b435"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b436"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b437"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b438"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b439"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b43a"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b43b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627920d0f90c50a22dd4b445c"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח3",
//     "profession": "חשבון",
//     "day": "17/04/2022",
//     "time": "12:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b446"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b447"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b448"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b449"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44a"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44b"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44c"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44d"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44e"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44f"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627929ec77a4f7e4dbf3f079c"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח1",
//     "profession": "אנגלית",
//     "day": "18/04/2022",
//     "time": "08:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07a"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07b"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07c"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07d"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07e"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07f"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f080"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f081"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f082"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f083"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792a3c77a4f7e4dbf3f08dc"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח2",
//     "profession": "חשבון",
//     "day": "18/04/2022",
//     "time": "08:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f08e"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f08f"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f090"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f091"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f092"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f093"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f094"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f095"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f096"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f097"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792a8d77a4f7e4dbf3f0a1c"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח3",
//     "profession": "היסטוריה",
//     "day": "18/04/2022",
//     "time": "08:29",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a2"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a3"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a4"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a5"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a6"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a7"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a8"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a9"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0aa"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0ab"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792b0777a4f7e4dbf3f0b5c"
//     },
//     "teacherName": "גליה מוריוסף",
//     "className": "ח1",
//     "profession": "פיזיקה",
//     "day": "18/04/2022",
//     "time": "10:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b6"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b7"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b8"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b9"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0ba"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bb"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bc"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bd"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0be"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bf"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792ba777a4f7e4dbf3f0c9c"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח2",
//     "profession": "היסטוריה",
//     "day": "18/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0ca"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cb"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cc"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cd"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0ce"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cf"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d0"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d1"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d2"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792c3f77a4f7e4dbf3f0ddc"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח3",
//     "profession": "לשון",
//     "day": "18/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0de"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0df"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e0"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e1"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e2"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e3"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e4"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e5"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e6"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792cc677a4f7e4dbf3f0f1c"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח1",
//     "profession": "תנ\"ך",
//     "day": "18/04/2022",
//     "time": "12:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f2"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f3"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f4"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f5"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f6"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f7"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f8"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f9"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0fa"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0fb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792d3277a4f7e4dbf3f106c"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח2",
//     "profession": "לשון",
//     "day": "18/04/2022",
//     "time": "12:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f107"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f108"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f109"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10a"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10b"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10c"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10d"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10e"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10f"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f110"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792dbe77a4f7e4dbf3f11bc"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח3",
//     "profession": "ספרות",
//     "day": "18/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11c"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11d"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11e"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11f"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f120"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f121"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f122"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f123"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f124"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f125"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f0c77a4f7e4dbf3f130c"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח1",
//     "profession": "היסטוריה",
//     "day": "19/04/2022",
//     "time": "08:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f131"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f132"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f133"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f134"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f135"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f136"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f137"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f138"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f139"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f13a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f4077a4f7e4dbf3f144c"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח2",
//     "profession": "חשבון",
//     "day": "19/04/2022",
//     "time": "08:22",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f145"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f146"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f147"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f148"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f149"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14a"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14b"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14c"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14d"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14e"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f7d77a4f7e4dbf3f159c"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח3",
//     "profession": "ספרות",
//     "day": "19/04/2022",
//     "time": "08:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f160"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f161"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f162"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f163"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792fc977a4f7e4dbf3f16dc"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח1",
//     "profession": "לשון",
//     "day": "19/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f16e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f16f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f170"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f171"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f172"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f173"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f174"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f175"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f176"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f177"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279301877a4f7e4dbf3f181c"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח2",
//     "profession": "תנ\"ך",
//     "day": "19/04/2022",
//     "time": "10:28",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f182"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f183"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f184"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f185"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f186"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f187"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f188"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f189"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f18a"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f18b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279305277a4f7e4dbf3f196c"
//     },
//     "teacherName": "אלון טמנו",
//     "className": "ח3",
//     "profession": "גיאוגרפיה",
//     "day": "19/04/2022",
//     "time": "10:33",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f197"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f198"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f199"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19a"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19b"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19c"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19d"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19e"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19f"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f1a0"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627930a677a4f7e4dbf3f1abc"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח1",
//     "profession": "ספרות",
//     "day": "19/04/2022",
//     "time": "12:30",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ac"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ad"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ae"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1af"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b0"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b1"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b2"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b3"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b4"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b5"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279312077a4f7e4dbf3f1bfc"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח2",
//     "profession": "אנגלית",
//     "day": "19/04/2022",
//     "time": "12:21",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c0"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c1"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c2"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c3"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c4"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c5"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c6"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c7"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c8"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c9"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279319377a4f7e4dbf3f1d3c"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח3",
//     "profession": "תנ\"ך",
//     "day": "19/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d4"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d5"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d6"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d7"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d8"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d9"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1da"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1db"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1dc"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1dd"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627932ef77a4f7e4dbf3f1e7c"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח1",
//     "profession": "חשבון",
//     "day": "20/04/2022",
//     "time": "08:26",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1e8"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1e9"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ea"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1eb"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ec"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ed"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ee"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ef"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1f0"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1f1"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279333277a4f7e4dbf3f1fcc"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח2",
//     "profession": "היסטוריה",
//     "day": "20/04/2022",
//     "time": "08:28",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1fd"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1fe"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1ff"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f200"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f201"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f202"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f203"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f204"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f205"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f206"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279337977a4f7e4dbf3f210c"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח3",
//     "profession": "אנגלית",
//     "day": "20/04/2022",
//     "time": "08:30",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f211"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f212"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f213"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f214"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f215"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f216"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f217"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f218"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f219"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f21a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627933b077a4f7e4dbf3f224c"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח1",
//     "profession": "אנגלית",
//     "day": "20/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f225"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f226"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f227"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f228"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f229"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22a"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22b"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22c"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22d"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22e"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627933ea77a4f7e4dbf3f238c"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח2",
//     "profession": "לשון",
//     "day": "20/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f239"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23a"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23b"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23c"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23d"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23e"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23f"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f240"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f241"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f242"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279342177a4f7e4dbf3f24cc"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח3",
//     "profession": "חשבון",
//     "day": "20/04/2022",
//     "time": "10:24",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24d"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24e"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24f"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f250"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f251"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f252"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f253"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f254"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f255"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f256"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279345277a4f7e4dbf3f260c"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח1",
//     "profession": "תנ\"ך",
//     "day": "20/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f261"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f262"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f263"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f264"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f265"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f266"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f267"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f268"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f269"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f26a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627934ab77a4f7e4dbf3f275c"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח2",
//     "profession": "ספרות",
//     "day": "20/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f276"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f277"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f278"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f279"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27a"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27b"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27c"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27d"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27e"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27f"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627934dc77a4f7e4dbf3f289c"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח3",
//     "profession": "לשון",
//     "day": "20/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f290"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f291"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f292"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f293"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279361077a4f7e4dbf3f29dc"
//     },
//     "teacherName": "גליה מוריוסף",
//     "className": "ח1",
//     "profession": "פיזיקה",
//     "day": "21/04/2022",
//     "time": "08:30",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f29e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f29f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a0"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a1"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a2"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a3"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a4"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a5"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a6"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279363b77a4f7e4dbf3f2b1c"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח2",
//     "profession": "ספרות",
//     "day": "21/04/2022",
//     "time": "08:29",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b2"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b3"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b4"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b5"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b6"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b7"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b8"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b9"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2ba"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2bb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279368077a4f7e4dbf3f2c5c"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח3",
//     "profession": "היסטוריה",
//     "day": "21/04/2022",
//     "time": "08:22",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c6"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c7"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c8"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c9"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2ca"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cb"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cc"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cd"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2ce"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cf"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627936ab77a4f7e4dbf3f2d9c"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח1",
//     "profession": "ספרות",
//     "day": "21/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2da"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2db"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2dc"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2dd"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2de"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2df"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e0"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e1"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e2"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627936d577a4f7e4dbf3f2edc"
//     },
//     "teacherName": "ליאור סבוני",
//     "className": "ח2",
//     "profession": "ערבית",
//     "day": "21/04/2022",
//     "time": "10:29",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2ee"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2ef"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f0"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f1"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f2"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f3"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f4"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f5"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f6"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279371b77a4f7e4dbf3f301c"
//     },
//     "teacherName": "אלון טמנו",
//     "className": "ח3",
//     "profession": "גיאוגרפיה",
//     "day": "21/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f302"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f303"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f304"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f305"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f306"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f307"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f308"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f309"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f30a"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f30b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791d68f90c50a22dd4b3a5d"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח1",
//     "profession": "חשבון",
//     "day": "24/04/2022",
//     "time": "08:40",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a6"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a7"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a8"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3a9"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3aa"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ab"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ac"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ad"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3ae"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791d68f90c50a22dd4b3af"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791dc3f90c50a22dd4b3b9d"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח2",
//     "profession": "אנגלית",
//     "day": "24/04/2022",
//     "time": "08:39",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3ba"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bb"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bc"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bd"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3be"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3bf"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c0"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c1"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c2"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dc3f90c50a22dd4b3c3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791dfcf90c50a22dd4b3cdd"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח3",
//     "profession": "תנ\"ך",
//     "day": "24/04/2022",
//     "time": "08:41",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3ce"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3cf"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d0"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d1"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d2"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d3"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d4"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d5"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d6"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791dfcf90c50a22dd4b3d7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791ec0f90c50a22dd4b3e1d"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח1",
//     "profession": "היסטוריה",
//     "day": "24/04/2022",
//     "time": "10:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e2"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e3"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e4"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e5"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e6"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e7"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e8"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3e9"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3ea"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791ec0f90c50a22dd4b3eb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791f3ef90c50a22dd4b3f5d"
//     },
//     "teacherName": "ליאור סבוני",
//     "className": "ח2",
//     "profession": "ערבית",
//     "day": "24/04/2022",
//     "time": "10:26",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f6"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f7"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f8"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3f9"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fa"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fb"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fc"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fd"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3fe"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f3ef90c50a22dd4b3ff"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791f7cf90c50a22dd4b409d"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח3",
//     "profession": "אנגלית",
//     "day": "24/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b40f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b410"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b411"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b412"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791f7cf90c50a22dd4b413"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62791febf90c50a22dd4b41dd"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח1",
//     "profession": "לשון",
//     "day": "24/04/2022",
//     "time": "12:24",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b41e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b41f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b420"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b421"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b422"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b423"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b424"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b425"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b426"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62791febf90c50a22dd4b427"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279206cf90c50a22dd4b431d"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח2",
//     "profession": "תנ\"ך",
//     "day": "24/04/2022",
//     "time": "12:25",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b432"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b433"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b434"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b435"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b436"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b437"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b438"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b439"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b43a"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279206cf90c50a22dd4b43b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627920d0f90c50a22dd4b445d"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח3",
//     "profession": "חשבון",
//     "day": "24/04/2022",
//     "time": "12:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b446"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b447"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b448"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b449"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44a"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44b"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44c"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44d"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44e"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627920d0f90c50a22dd4b44f"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627929ec77a4f7e4dbf3f079d"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח1",
//     "profession": "אנגלית",
//     "day": "25/04/2022",
//     "time": "08:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07a"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07b"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07c"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07d"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07e"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f07f"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f080"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f081"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f082"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627929ec77a4f7e4dbf3f083"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792a3c77a4f7e4dbf3f08dd"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח2",
//     "profession": "חשבון",
//     "day": "25/04/2022",
//     "time": "08:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f08e"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f08f"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f090"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f091"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f092"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f093"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f094"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f095"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f096"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a3c77a4f7e4dbf3f097"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792a8d77a4f7e4dbf3f0a1d"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח3",
//     "profession": "היסטוריה",
//     "day": "25/04/2022",
//     "time": "08:29",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a2"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a3"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a4"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a5"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a6"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a7"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a8"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0a9"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0aa"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792a8d77a4f7e4dbf3f0ab"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792b0777a4f7e4dbf3f0b5d"
//     },
//     "teacherName": "גליה מוריוסף",
//     "className": "ח1",
//     "profession": "פיזיקה",
//     "day": "25/04/2022",
//     "time": "10:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b6"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b7"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b8"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0b9"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0ba"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bb"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bc"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bd"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0be"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792b0777a4f7e4dbf3f0bf"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792ba777a4f7e4dbf3f0c9d"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח2",
//     "profession": "היסטוריה",
//     "day": "25/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0ca"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cb"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cc"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cd"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0ce"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0cf"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d0"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d1"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d2"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792ba777a4f7e4dbf3f0d3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792c3f77a4f7e4dbf3f0ddd"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח3",
//     "profession": "לשון",
//     "day": "25/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0de"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0df"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e0"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e1"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e2"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e3"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e4"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e5"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e6"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792c3f77a4f7e4dbf3f0e7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792cc677a4f7e4dbf3f0f1d"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח1",
//     "profession": "תנ\"ך",
//     "day": "25/04/2022",
//     "time": "12:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f2"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f3"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f4"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f5"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f6"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f7"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f8"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0f9"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0fa"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792cc677a4f7e4dbf3f0fb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792d3277a4f7e4dbf3f106d"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח2",
//     "profession": "לשון",
//     "day": "25/04/2022",
//     "time": "12:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f107"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f108"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f109"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10a"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10b"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10c"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10d"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10e"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f10f"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792d3277a4f7e4dbf3f110"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792dbe77a4f7e4dbf3f11bd"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח3",
//     "profession": "ספרות",
//     "day": "25/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11c"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11d"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11e"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f11f"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f120"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f121"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f122"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f123"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f124"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792dbe77a4f7e4dbf3f125"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f0c77a4f7e4dbf3f130d"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח1",
//     "profession": "היסטוריה",
//     "day": "26/04/2022",
//     "time": "08:25",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f131"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f132"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f133"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f134"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f135"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f136"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f137"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f138"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f139"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f0c77a4f7e4dbf3f13a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f4077a4f7e4dbf3f144d"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח2",
//     "profession": "חשבון",
//     "day": "26/04/2022",
//     "time": "08:22",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f145"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f146"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f147"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f148"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f149"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14a"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14b"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14c"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14d"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f4077a4f7e4dbf3f14e"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792f7d77a4f7e4dbf3f159d"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח3",
//     "profession": "ספרות",
//     "day": "26/04/2022",
//     "time": "08:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f15f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f160"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f161"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f162"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792f7d77a4f7e4dbf3f163"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "62792fc977a4f7e4dbf3f16dd"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח1",
//     "profession": "לשון",
//     "day": "26/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f16e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f16f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f170"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f171"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f172"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f173"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f174"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f175"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f176"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "62792fc977a4f7e4dbf3f177"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279301877a4f7e4dbf3f181d"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח2",
//     "profession": "תנ\"ך",
//     "day": "26/04/2022",
//     "time": "10:28",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f182"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f183"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f184"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f185"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f186"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f187"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f188"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f189"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f18a"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279301877a4f7e4dbf3f18b"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279305277a4f7e4dbf3f196d"
//     },
//     "teacherName": "אלון טמנו",
//     "className": "ח3",
//     "profession": "גיאוגרפיה",
//     "day": "26/04/2022",
//     "time": "10:33",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f197"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f198"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f199"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19a"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19b"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19c"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19d"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19e"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f19f"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279305277a4f7e4dbf3f1a0"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627930a677a4f7e4dbf3f1abd"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח1",
//     "profession": "ספרות",
//     "day": "26/04/2022",
//     "time": "12:30",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ac"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": false,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ad"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1ae"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1af"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b0"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b1"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": false,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b2"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b3"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b4"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627930a677a4f7e4dbf3f1b5"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279312077a4f7e4dbf3f1bfd"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח2",
//     "profession": "אנגלית",
//     "day": "26/04/2022",
//     "time": "12:21",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c0"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c1"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c2"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c3"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c4"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c5"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c6"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c7"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c8"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279312077a4f7e4dbf3f1c9"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279319377a4f7e4dbf3f1d3d"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח3",
//     "profession": "תנ\"ך",
//     "day": "26/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d4"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d5"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d6"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d7"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d8"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1d9"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1da"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1db"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1dc"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279319377a4f7e4dbf3f1dd"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627932ef77a4f7e4dbf3f1e7d"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח1",
//     "profession": "חשבון",
//     "day": "27/04/2022",
//     "time": "08:26",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1e8"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1e9"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ea"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1eb"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ec"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ed"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ee"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1ef"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1f0"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627932ef77a4f7e4dbf3f1f1"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279333277a4f7e4dbf3f1fcd"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח2",
//     "profession": "היסטוריה",
//     "day": "27/04/2022",
//     "time": "08:28",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1fd"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1fe"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f1ff"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f200"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f201"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f202"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f203"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f204"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f205"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279333277a4f7e4dbf3f206"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279337977a4f7e4dbf3f210d"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח3",
//     "profession": "אנגלית",
//     "day": "27/04/2022",
//     "time": "08:30",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f211"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f212"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f213"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f214"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f215"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f216"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f217"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f218"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f219"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279337977a4f7e4dbf3f21a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627933b077a4f7e4dbf3f224d"
//     },
//     "teacherName": "עוז שלום",
//     "className": "ח1",
//     "profession": "אנגלית",
//     "day": "27/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f225"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f226"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f227"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f228"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f229"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22a"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22b"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22c"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22d"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933b077a4f7e4dbf3f22e"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627933ea77a4f7e4dbf3f238d"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח2",
//     "profession": "לשון",
//     "day": "27/04/2022",
//     "time": "10:23",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f239"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23a"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23b"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23c"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23d"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23e"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f23f"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f240"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f241"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627933ea77a4f7e4dbf3f242"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279342177a4f7e4dbf3f24cd"
//     },
//     "teacherName": "חיים כהן",
//     "className": "ח3",
//     "profession": "חשבון",
//     "day": "27/04/2022",
//     "time": "10:24",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24d"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24e"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f24f"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f250"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f251"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f252"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f253"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f254"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f255"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279342177a4f7e4dbf3f256"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279345277a4f7e4dbf3f260d"
//     },
//     "teacherName": "אלעד דהן",
//     "className": "ח1",
//     "profession": "תנ\"ך",
//     "day": "27/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f261"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f262"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f263"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f264"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f265"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f266"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f267"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f268"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f269"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279345277a4f7e4dbf3f26a"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627934ab77a4f7e4dbf3f275d"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח2",
//     "profession": "ספרות",
//     "day": "27/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f276"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f277"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f278"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f279"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27a"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27b"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27c"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27d"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27e"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934ab77a4f7e4dbf3f27f"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627934dc77a4f7e4dbf3f289d"
//     },
//     "teacherName": "סמדר שולמן",
//     "className": "ח3",
//     "profession": "לשון",
//     "day": "27/04/2022",
//     "time": "12:26",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28a"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28b"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28c"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28d"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28e"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": false,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f28f"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f290"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f291"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f292"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627934dc77a4f7e4dbf3f293"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279361077a4f7e4dbf3f29dd"
//     },
//     "teacherName": "גליה מוריוסף",
//     "className": "ח1",
//     "profession": "פיזיקה",
//     "day": "28/04/2022",
//     "time": "08:30",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f29e"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f29f"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a0"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a1"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a2"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a3"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a4"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a5"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a6"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279361077a4f7e4dbf3f2a7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279363b77a4f7e4dbf3f2b1d"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח2",
//     "profession": "ספרות",
//     "day": "28/04/2022",
//     "time": "08:29",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b2"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b3"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b4"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b5"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b6"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b7"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b8"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2b9"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2ba"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279363b77a4f7e4dbf3f2bb"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279368077a4f7e4dbf3f2c5d"
//     },
//     "teacherName": "שלי מיכאלאשוילי",
//     "className": "ח3",
//     "profession": "היסטוריה",
//     "day": "28/04/2022",
//     "time": "08:22",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c6"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c7"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c8"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2c9"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2ca"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cb"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cc"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cd"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2ce"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279368077a4f7e4dbf3f2cf"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627936ab77a4f7e4dbf3f2d9d"
//     },
//     "teacherName": "אושרי גנאח",
//     "className": "ח1",
//     "profession": "ספרות",
//     "day": "28/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אגם בוחבוט",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2da"
//         }
//       },
//       {
//         "name": "אמבר הרד",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2db"
//         }
//       },
//       {
//         "name": "אנג׳לינה ג׳ולי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2dc"
//         }
//       },
//       {
//         "name": "ביבי נתניהו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2dd"
//         }
//       },
//       {
//         "name": "בר רפאלי",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2de"
//         }
//       },
//       {
//         "name": "דודי ביטון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2df"
//         }
//       },
//       {
//         "name": "סיטארה אלייב",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e0"
//         }
//       },
//       {
//         "name": "עדן מוזס",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e1"
//         }
//       },
//       {
//         "name": "עינב בן חמו",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e2"
//         }
//       },
//       {
//         "name": "שקד בן חמו",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936ab77a4f7e4dbf3f2e3"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "627936d577a4f7e4dbf3f2edd"
//     },
//     "teacherName": "ליאור סבוני",
//     "className": "ח2",
//     "profession": "ערבית",
//     "day": "28/04/2022",
//     "time": "10:29",
//     "students": [
//       {
//         "name": "ג׳סטין ביבר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2ee"
//         }
//       },
//       {
//         "name": "דודו אהרון",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2ef"
//         }
//       },
//       {
//         "name": "דונלד טראמפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f0"
//         }
//       },
//       {
//         "name": "טל חדד",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f1"
//         }
//       },
//       {
//         "name": "יאיר לפיד",
//         "arrived": false,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f2"
//         }
//       },
//       {
//         "name": "יהודית מנדלבוים",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f3"
//         }
//       },
//       {
//         "name": "יעל בר זוהר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f4"
//         }
//       },
//       {
//         "name": "ליאור אוחנה",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f5"
//         }
//       },
//       {
//         "name": "מנדל שמעון עמר",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f6"
//         }
//       },
//       {
//         "name": "נועה קירל",
//         "arrived": true,
//         "_id": {
//           "$oid": "627936d577a4f7e4dbf3f2f7"
//         }
//       }
//     ],
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "6279371b77a4f7e4dbf3f301d"
//     },
//     "teacherName": "אלון טמנו",
//     "className": "ח3",
//     "profession": "גיאוגרפיה",
//     "day": "28/04/2022",
//     "time": "10:27",
//     "students": [
//       {
//         "name": "אביחי ממן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f302"
//         }
//       },
//       {
//         "name": "בראד פיט",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f303"
//         }
//       },
//       {
//         "name": "ברק אובמה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f304"
//         }
//       },
//       {
//         "name": "ג׳ו ביידן",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f305"
//         }
//       },
//       {
//         "name": "ג׳וני דפ",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f306"
//         }
//       },
//       {
//         "name": "ג׳ייסון סטטהם",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f307"
//         }
//       },
//       {
//         "name": "גיא דהן",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f308"
//         }
//       },
//       {
//         "name": "דניאל אסייג",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f309"
//         }
//       },
//       {
//         "name": "נופר צדפיה",
//         "arrived": true,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f30a"
//         }
//       },
//       {
//         "name": "עדן דדון",
//         "arrived": false,
//         "_id": {
//           "$oid": "6279371b77a4f7e4dbf3f30b"
//         }
//       }
//     ],
//     "__v": 0
//   }]



	  let size=x.length
	  console.log(size)
	  let s=[]
	  		//****--Random id---****//
	const ran_id = (length) =>  {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
	console.log(ran_id(60))
	//****--Random id---****//

	 
	  for(let i=0;i<size;i++)
	  {
		  for(let j=0;j<10;j++)
		 	{ 
				 s[j]={
					name:x[i].students[j].name,
					arrived:x[i].students[j].arrived,
					//id:ran_id(50)
				 }

	 		 }
			new LessonSchema({
		//x[i].students[j]._id=ran_id(50);
		teacherName:x[i].teacherName,
		className:x[i].className,
		profession:x[i].profession,
		day:x[i].day,
		time:x[i].time,
		students:s
	}).save()
			  
			  
	
	  }



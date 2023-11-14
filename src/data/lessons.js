import { questions } from './DummyQuestions';

export const lessons = [
  {
    id: 1,
    titleEnglish: 'Days of the Week',
    titleArabic: 'أيام الأسبوع',
    imageLink:
      'https://ecdn.teacherspayteachers.com/thumbitem/%D8%A3%D9%8A%D8%A7%D9%85-%D8%A7%D9%84%D8%A3%D8%B3%D8%A8%D9%88%D8%B9-5774095-1624390540/original-5774095-1.jpg',
    includeImage: false,
    level: 'Beginner',
    type: 'Vocabulary',
    isCompleted: false,
    exercises: [],
    table: [
      {
        arabicWord: 'الأحد',
        englishWord: 'Sunday',
        translation: 'Domingo',
        transcription: 'al-ahad',
      },
      {
        arabicWord: 'الإثنين',
        englishWord: 'Monday',
        translation: 'Lunes',
        transcription: 'al-ithnayn',
      },
      {
        arabicWord: 'الثلاثاء',
        englishWord: 'Tuesday',
        translation: 'Martes',
        transcription: 'ath-thulatha',
      },
      {
        arabicWord: 'الأربعاء',
        englishWord: 'Wednesday',
        translation: 'Miércoles',
        transcription: 'al-arbiʿa',
      },
      {
        arabicWord: 'الخميس',
        englishWord: 'Thursday',
        translation: 'Jueves',
        transcription: 'al-khamis',
      },
      {
        arabicWord: 'الجمعة',
        englishWord: 'Friday',
        translation: 'Viernes',
        transcription: 'al-jumʿa',
      },
      {
        arabicWord: 'السبت',
        englishWord: 'Saturday',
        translation: 'Sábado',
        transcription: 'as-sabt',
      },
    ],
  },
  {
    id: 11111,
    titleEnglish: 'Benefits of Green Tea',
    titleArabic: 'فوائد الشاي الأخضر',
    level: 'Beginner',
    type: 'Reading',
    imageLink: 'https://assets.rbl.ms/19152954/origin.jpg',
    includeImage: true,
    isCompleted: false,
    exercises: questions,
    //videoLink: '',
    //videoLink: 'https://edpuzzle.com/media/6553a11ba164024027006fdc',
    videoLink: 'https://www.youtube.com/watch?v=u0psf0FHhf8',
    videoText: `لِلشاي الأخضر فوائد عديدة أقرتها دراسات حديثة وأبحاث مختلفة، فهذه دراسة تؤكد دور الشاي الأخضر في علاج السمنة، أجراها مجموعة من الباحثين من جامعة أوهايو الأمريكية، ووجدوا تأثيرا للشاي الأخضر على بكتيريا الأمعاء والسمنة والأمراض المرتبطة بها.
    فوائد الشاي الأخضر لا تقتصر على إنقاص الوزن فحسب، فقد كشفت دراسة حديثة النقاب عن أنه يقلل من مخاطر سرطان الثدي. وأجرى علماء من مركز الطب الحيوي في جامعة سالفورد في إنجلترا بحثا توصل إلى دور كبير للشاي الأخضر في منع انتشار الخلايا السرطانية عند المرأة في حالة إصابتها بسرطان الثدي.
    وأشار البحث إلى أن شاي الماتشا الأخضر الياباني تحديدا يجعل الخلايا السرطانية في حالة من الهدوء والاستقرار.
    هذا بالإضافة إلى فوائد أخرى عديدة للشاي الأخضر، منها أنه أقوى مضاد للأكسدة، ويحارب سموم الجسم، ويعزز صحة القلب.
    ويعتبر الشاي الأخضر من أكثر المشروبات المفيدة للصحة، ويحتوي على العديد من الفيتامينات والمعادن والمركبات النباتية الفعالة، ويعتبر مصدرا جيدا للبوليفينولات، وهي مضادات الأكسدة التي تحمي الخلايا من الضرر الناتج عن الجذور الحرة.
      `,
    text: `لِلشاي الأخضر فوائد عديدة أقرتها دراسات حديثة وأبحاث مختلفة، فهذه دراسة تؤكد دور الشاي الأخضر في علاج السمنة، أجراها مجموعة من الباحثين من جامعة أوهايو الأمريكية، ووجدوا تأثيرا للشاي الأخضر على بكتيريا الأمعاء والسمنة والأمراض المرتبطة بها.
  
  فوائد الشاي الأخضر لا تقتصر على إنقاص الوزن فحسب، فقد كشفت دراسة حديثة النقاب عن أنه يقلل من مخاطر سرطان الثدي. وأجرى علماء من مركز الطب الحيوي في جامعة سالفورد في إنجلترا بحثا توصل إلى دور كبير للشاي الأخضر في منع انتشار الخلايا السرطانية عند المرأة في حالة إصابتها بسرطان الثدي.
  
  وأشار البحث إلى أن شاي الماتشا الأخضر الياباني تحديدا يجعل الخلايا السرطانية في حالة من الهدوء والاستقرار.
  
  هذا بالإضافة إلى فوائد أخرى عديدة للشاي الأخضر، منها أنه أقوى مضاد للأكسدة، ويحارب سموم الجسم، ويعزز صحة القلب.
  
  ويعتبر الشاي الأخضر من أكثر المشروبات المفيدة للصحة، ويحتوي على العديد من الفيتامينات والمعادن والمركبات النباتية الفعالة، ويعتبر مصدرا جيدا للبوليفينولات، وهي مضادات الأكسدة التي تحمي الخلايا من الضرر الناتج عن الجذور الحرة.
    `,
  },
  {
    id: 0,
    titleEnglish: 'Letters',
    titleArabic: 'الحروف',
    imageLink:
      'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/Alphabet.jpg',
    includeImage: false,
    level: 'Beginner',
    type: 'Vocabulary',
    isCompleted: false,
    exercises: [],
    table: [
      {
        letter: 'ا',
        initial: 'ا',
        middle: 'ـا',
        end: 'ـا',
        transcription: 'alef',
      },
      {
        letter: 'ب',
        initial: 'بـ',
        middle: 'ـبـ',
        end: 'ـب',
        transcription: 'baa',
      },
      {
        letter: 'ت',
        initial: 'تـ',
        middle: 'ـتـ',
        end: 'ـت',
        transcription: 'taa',
      },
      {
        letter: 'ث',
        initial: 'ثـ',
        middle: 'ـثـ',
        end: 'ـث',
        transcription: 'thaa',
      },
      {
        letter: 'ج',
        initial: 'جـ',
        middle: 'ـجـ',
        end: 'ـج',
        transcription: 'jeem',
      },
      {
        letter: 'ح',
        initial: 'حـ',
        middle: 'ـحـ',
        end: 'ـح',
        transcription: 'haa',
      },
      {
        letter: 'خ',
        initial: 'خـ',
        middle: 'ـخـ',
        end: 'ـخ',
        transcription: 'khaa',
      },
      {
        letter: 'د',
        initial: 'د',
        middle: 'ـد',
        end: 'ـد',
        transcription: 'dal',
      },
      {
        letter: 'ذ',
        initial: 'ذ',
        middle: 'ـذ',
        end: 'ـذ',
        transcription: 'thal',
      },
      {
        letter: 'ر',
        initial: 'ر',
        middle: 'ـر',
        end: 'ـر',
        transcription: 'raa',
      },
      {
        letter: 'ز',
        initial: 'ز',
        middle: 'ـز',
        end: 'ـز',
        transcription: 'zayn',
      },
      {
        letter: 'س',
        initial: 'سـ',
        middle: 'ـسـ',
        end: 'ـس',
        transcription: 'seen',
      },
      {
        letter: 'ش',
        initial: 'شـ',
        middle: 'ـشـ',
        end: 'ـش',
        transcription: 'sheen',
      },
      {
        letter: 'ص',
        initial: 'صـ',
        middle: 'ـصـ',
        end: 'ـص',
        transcription: 'Saad',
      },
      {
        letter: 'ض',
        initial: 'ضـ',
        middle: 'ـضـ',
        end: 'ـض',
        transcription: 'Dhad',
      },
      {
        letter: 'ط',
        initial: 'طـ',
        middle: 'ـطـ',
        end: 'ـط',
        transcription: 'Taa',
      },
      {
        letter: 'ظ',
        initial: 'ظـ',
        middle: 'ـظـ',
        end: 'ـظ',
        transcription: 'Thaa',
      },
      {
        letter: 'ع',
        initial: 'عـ',
        middle: 'ـعـ',
        end: 'ـع',
        transcription: 'ayn',
      },
      {
        letter: 'غ',
        initial: 'غـ',
        middle: 'ـغـ',
        end: 'ـغ',
        transcription: 'ghayn',
      },
      {
        letter: 'ف',
        initial: 'فـ',
        middle: 'ـفـ',
        end: 'ـف',
        transcription: 'faa',
      },
      {
        letter: 'ق',
        initial: 'قـ',
        middle: 'ـقـ',
        end: 'ـق',
        transcription: 'qaaf',
      },
      {
        letter: 'ك',
        initial: 'كـ',
        middle: 'ـكـ',
        end: 'ـك',
        transcription: 'kaaf',
      },
      {
        letter: 'ل',
        initial: 'لـ',
        middle: 'ـلـ',
        end: 'ـل',
        transcription: 'laam',
      },
      {
        letter: 'م',
        initial: 'مـ',
        middle: 'ـمـ',
        end: 'ـم',
        transcription: 'meem',
      },
      {
        letter: 'ن',
        initial: 'نـ',
        middle: 'ـنـ',
        end: 'ـن',
        transcription: 'noon',
      },
      {
        letter: 'ه',
        initial: 'هـ',
        middle: 'ـهـ',
        end: 'ـه',
        transcription: 'haa',
      },
      {
        letter: 'و',
        initial: 'و',
        middle: 'ـو',
        end: 'ـو',
        transcription: 'waw',
      },
      {
        letter: 'ي',
        initial: 'يـ',
        middle: 'ـيـ',
        end: 'ـي',
        transcription: 'yaa',
      },
    ],
  },
];

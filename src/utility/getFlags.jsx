export async function getLanguagesWithFlags() {
  const countryApiUrl = 'https://restcountries.com/v3.1/alpha/';

  try {
    const languages = [
      {
        name: 'English',
        countryCode: 'USA',
      },
      {
        name: 'Spanish',
        countryCode: 'ESP',
      },
      {
        name: 'French',
        countryCode: 'FRA',
      },
      {
        name: 'German',
        countryCode: 'DEU',
      },
      {
        name: 'Chinese',
        countryCode: 'CHN',
      },
      {
        name: 'Japanese',
        countryCode: 'JPN',
      },
      {
        name: 'Korean',
        countryCode: 'KOR',
      },
      {
        name: 'Russian',
        countryCode: 'RUS',
      },
      {
        name: 'Arabic',
        countryCode: 'ARE',
      },
      {
        name: 'Hindi',
        countryCode: 'IND',
      },
      {
        name: 'Portuguese',
        countryCode: 'PRT',
      },
      {
        name: 'Italian',
        countryCode: 'ITA',
      },
      {
        name: 'Turkish',
        countryCode: 'TUR',
      },
      {
        name: 'Polish',
        countryCode: 'POL',
      },
      {
        name: 'Dutch',
        countryCode: 'NLD',
      },
      {
        name: 'Swedish',
        countryCode: 'SWE',
      },
      {
        name: 'Norwegian',
        countryCode: 'NOR',
      },
      {
        name: 'Danish',
        countryCode: 'DNK',
      },
      {
        name: 'Finnish',
        countryCode: 'FIN',
      },
      {
        name: 'Czech',
        countryCode: 'CZE',
      },
      {
        name: 'Hungarian',
        countryCode: 'HUN',
      },
      {
        name: 'Romanian',
        countryCode: 'ROU',
      },
      {
        name: 'Greek',
        countryCode: 'GRC',
      },
      {
        name: 'Slovak',
        countryCode: 'SVK',
      },
      {
        name: 'Bulgarian',
        countryCode: 'BGR',
      },
      {
        name: 'Croatian',
        countryCode: 'HRV',
      },
      {
        name: 'Lithuanian',
        countryCode: 'LTU',
      },
      {
        name: 'Latvian',
        countryCode: 'LVA',
      },
      {
        name: 'Estonian',
        countryCode: 'EST',
      },
      {
        name: 'Slovenian',
        countryCode: 'SVN',
      },
      {
        name: 'Serbian',
        countryCode: 'SRB',
      },
    ];

    for (const language of languages) {
      const countryCode = language.countryCode;
      const countryResponse = await fetch(`${countryApiUrl}${countryCode}`);
      const countryData = await countryResponse.json();

      language.flag = countryData[0].flags.png;
    }

    return languages;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

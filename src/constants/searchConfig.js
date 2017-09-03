export default {
  default: 0,
  types: [
    {
      name: 'people',
      tableColumns: [
        {
          title: 'Name',
          selector: 'name',
        },
        {
          title: 'Gender',
          selector: 'gender',
        },
        {
          title: 'Birth Year',
          selector: 'birth_year',
        },
        {
          title: 'Height',
          selector: 'height',
        },
      ],
    },
    {
      name: 'planets',
      tableColumns: [
        {
          title: 'Name',
          selector: 'name',
        },
        {
          title: 'Population',
          selector: 'population',
        },
        {
          title: 'Climate',
          selector: 'climate'
        },
        {
          title: 'Gravity',
          selector: 'gravity',
        },
      ],
    },
    {
      name: 'starships',
      tableColumns: [
        {
          title: 'Name',
          selector: 'name',
        },
      ],
    },
  ],
};

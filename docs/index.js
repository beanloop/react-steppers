import {start} from 'documittu-template-default'
import apiData from './analyze-result.json'

start({
  title: 'react-form-helper',
  pages: require.context('./pages', true, /^\.\/.*\.md$/),
  apiDocs: {
    data: apiData,
  },
})

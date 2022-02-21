
import { publish } from 'gh-pages';

publish(
 'public',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/CodeAgony/countdown.git',
  user: {
   name: 'Yaroslav Bukhta',
   email: 'yaroslav.bkh@gmail.com'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
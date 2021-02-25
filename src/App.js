import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const coustomers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '킹석중',
  'birthday': '981112',
  'gender': '남자',
  'job': '대통령'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김용철',
    'birthday': '980119',
    'gender': '개',
    'job': '애완용'
  },
  {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '이호영',
      'birthday': '980224',
      'gender': '남자',
      'job': '비서'
  }
]

function App() {
  return (
    <div>
    {
      coustomers.map(c => {
        return(
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />
        )
      })
    }
    </div>
  );
}

export default App;

import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    // paste the code provided in the instruction below
    const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      },
      {
        name: 'Ruby',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
      },
      {
        name: 'Ruby on Rails',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
      },
      {
        name: 'Python',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
      }
    ];

    return (
      <div>
        <h1>List of Language</h1>
        <div className='language'>
          {/* remove the code from here */}
          {/* up to here */}
          {/* use the map method to display the Language components */}
          {languageList.map((languageItem) => {
            return (
              // Call the Language component and pass props to it
              <Language 
                name={languageItem.name}
                image={languageItem.image}
              />
            )
          })}
          
        </div>
      </div>
    );
  }
}

export default App;
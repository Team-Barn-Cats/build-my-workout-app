//This is the landing page / home page
import HeroOptions from "./HeroOptions";
import { useState } from "react";
import FullBody from "../FullBody";
import UpperBody from "../UpperBody";
import LowerBody from "../LowerBody";


const ExerciseHero = () => {

    const [selectedWorkoutOption, setSelectedWorkoutOption] = useState(null);


    const handleOptionSubmit = (option) => {
      setSelectedWorkoutOption(option);
    };
      return (
          <div>
              <HeroOptions onSubmit={handleOptionSubmit} />
              {selectedWorkoutOption === 'fullBody' && <FullBody />}
              {selectedWorkoutOption === 'upperBody' && <UpperBody />}
              {selectedWorkoutOption === 'lowerBody' && <LowerBody />}
          </div>
      );
  };

export default ExerciseHero;

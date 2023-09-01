import React, { useState } from "react";
import { ReactComponent as Up } from '../images/upbutton.svg';
import { ReactComponent as Down } from '../images/downbutton.svg';
import { ReactComponent as GenerateButton } from '../images/generatebutton.svg';
import { ReactComponent as Trash } from '../images/trash.svg';
import { ReactComponent as Add } from '../images/add.svg';

export const GenerateView = () => {
  const [multipleChoiceNumber, setMultipleChoiceNumber] = useState(0);
  const [subjectiveNumber, setSubjectiveNumber] = useState(0);

  return (
    <div className="main_view">
      <section>
        <div className="section_header"><Trash className='trash_button'/><Add className='add_button'/></div>
        <div className="section_lists"></div>
      </section>
      <div className="mid_section">
      </div>
      <div className="right_section"></div>
      <footer>
        <div className="generate_footer">
          <div className="multiple">
            <div className="probType">객관식</div>
            <div className="number_select">
              <div className="number">{multipleChoiceNumber}</div>
              <div className="number_button">
                <Up className='up' onClick={() => setMultipleChoiceNumber(multipleChoiceNumber + 1)} />
                <Down className='down' onClick={() => multipleChoiceNumber > 0 && setMultipleChoiceNumber(multipleChoiceNumber - 1)} />
              </div>
            </div>
          </div>
          <div className="subjective">
            <div className="probType">주관식</div>
            <div className="number_select">
              <div className="number">{subjectiveNumber}</div>
              <div className="number_button">
                <Up className='up' onClick={() => setSubjectiveNumber(subjectiveNumber + 1)} />
                <Down className='down' onClick={() => subjectiveNumber > 0 && setSubjectiveNumber(subjectiveNumber - 1)} />
              </div>
            </div>
          </div>
          <GenerateButton className='generate_button' />
        </div>
      </footer>
    </div>
  );
};

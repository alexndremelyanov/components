import { jsx } from '@theme-ui/core';
import { useState } from 'react';
import { Box } from '../Box';
import { TextField } from './TextField';
export const Autocomplete = ({ suggestions, ...rest }) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const onChange = e => {
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setActiveSuggestion(0);
    setShowSuggestions(true);
    setFilteredSuggestions(filteredSuggestions);
    setUserInput(e.currentTarget.value);
  };

  const onClick = e => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(prev => prev - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(prev => prev + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul
          sx={{
            position: 'absolute',
            top: 40,
            backgroundColor: 'red',
            left: 0,
            border: '1px solid #999',
            borderTopWidth: '0',
            listStyle: 'none',
            marginTop: '0',
            maxHeight: '143px',
            overflowY: 'auto',
            paddingLeft: '0',
            width: '100%',
            li: {
              padding: '0.5rem'
            }
          }}
        >
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestion) {
              className = 'suggestion-active';
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    }
  }
  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        {...rest}
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      {suggestionsListComponent}
    </Box>
  );
};
export default Autocomplete;

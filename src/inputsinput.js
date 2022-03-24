import React, { memo } from "react";
import styled from "styled-components";


export const TextInput = memo(
  ({
    value,
    onChange,
    id,
    type,
    style,
    label,
    required,
    description,
    error,
    placeholder
  }) => {
    return (
      <div>
        <Container>
          <Label>
            {label} {required && <span style={{ color: `red` }}> *</span>}
          </Label>
          <Input
            value={value}
            onChange={onChange}
            id={id}
            type={type}
            style={style}
            placeholder={placeholder}
          />
        </Container>
        {description && <Description>{description}</Description>}
        {error && <Error>{error}</Error>}
      </div>
    );
  }
);
const Input = styled.input`
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  width: auto;
  margin: 5px 0px;
`;

const Label = styled.label`
  display: inline-block;
`;

const Container = styled.div`
  position: relative;
  margin-top: 10px;
`;

const Error = styled.p`
  color: red;
`;

const Description = styled.p`
  color: blue;
`;
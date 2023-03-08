import React, { useEffect, useState } from "react";
import { api, endpoints } from "../../api";
import {
  characterGendersList,
  CharacterResponseType,
  characterStatusList,
  CharactersType,
} from "../../types";
import { HomePageContainer, SelectorsContainer } from "./styles";
import { Col, Input, message, Pagination, Row, Select } from "antd";
import { SelectorsType } from "./types";
import CardItem from "../../components/CardItem";

const { Option } = Select;

export const HomePage = () => {
  const [charactersState, setCharacters] = useState<CharactersType>([]);
  const [amountState, setAmount] = useState<number>(0);
  const [selectorsState, setSelectors] = useState<SelectorsType>({ page: 1 });

  useEffect(() => {
    api
      .get<CharacterResponseType>(endpoints.getCharactersByData(selectorsState))
      .then((el) => {
        setAmount(el.data.info.count);
        setCharacters(el.data.results);
      })
      .catch((err) => message.warning(err.message).then());
  }, [selectorsState]);

  console.log(amountState);

  return (
    <HomePageContainer>
      <SelectorsContainer>
        <Input
          onChange={(e) =>
            setSelectors({ ...selectorsState, name: e.target.value, page: 1 })
          }
          value={selectorsState.name}
          placeholder="Name"
        />
        <Select
          onChange={(value: string) =>
            setSelectors({ ...selectorsState, status: value, page: 1 })
          }
          placeholder="Status"
          value={selectorsState.status}
          allowClear
          defaultValue={undefined}
        >
          {characterStatusList.map((el) => (
            <Option key={el} value={el}>
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </Option>
          ))}
        </Select>
        <Select
          onChange={(value) =>
            setSelectors({ ...selectorsState, gender: value, page: 1 })
          }
          placeholder="Gender"
          value={selectorsState.gender}
          allowClear
          defaultValue={undefined}
        >
          {characterGendersList.map((el) => (
            <Option key={el} value={el}>
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </Option>
          ))}
        </Select>
      </SelectorsContainer>
      <Row
        gutter={[10, 10]}
        style={{ padding: "50px 0", justifyContent: "flex-start" }}
      >
        {charactersState.map((el, index) => (
          <Col
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
            xs={{ span: 24 }}
            xxl={{ span: 6 }}
            xl={{ span: 8 }}
            lg={{ span: 12 }}
          >
            <CardItem character={el} />
          </Col>
        ))}
      </Row>

      <Pagination
        size="default"
        defaultCurrent={selectorsState.page}
        onChange={(value) => setSelectors({ ...selectorsState, page: value })}
        pageSize={20}
        total={amountState}
        showSizeChanger={false}
        current={selectorsState.page}
      />
    </HomePageContainer>
  );
};

import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-inline: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  margin: 10px auto;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  /* POINT valueを関数にすることで、引数にpropsを受け取ることができる。
  { $isSelected } の部分を変更することで受け取る名前を変更することができる。
  2024/04 Transient props を使用するように修正 isSelected →　$isSelected
  参考: https://styled-components.com/docs/api#transient-props
  */
  background-color: ${( $isSelected ) => ($isSelected ? "pink" : "darkcyan")};
  transition: all 0.3s ease-out;

  /* POINT 疑似クラスの追加 */
  /* 2924/04 ホバー時のスタイルが正しく適用していないの修正*/
  &:hover,
  :active {
    opacity: 0.7;
    transform: scale(1.1);
  }
  span {
    color: purple;
  }
  /* POINT メディアクエリ */
  @media (max-width: 600px) {
    border-radius: 0;
  }

  :global {
    background-color: black;
  }
`;

const StyledSubButton = styled(StyledButton)`
  background-color: ${({ $isSelectedSub }) =>
    $isSelectedSub ? "crimson" : "coral"};
`;

const StyledOliveButton = styled(StyledButton)`
  background-color: olive;
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedSub, setIsSelectedSub] = useState(false);

  const onClickHandler = () => setIsSelected(!isSelected);
  const onClickSubHandler = () => setIsSelectedSub(!isSelectedSub);

  return (
    // 属性にある isSelected は 上記で定義されています。
    // background-color: ${({ isSelected }) => ~~~ };
    <>
      <StyledButton $isSelected={isSelected} onClick={onClickHandler}>
        ボタン
      </StyledButton>
      <StyledSubButton
        $isSelectedSub={isSelectedSub}
        onClick={onClickSubHandler}
      >
        サブボタン
      </StyledSubButton>
      <StyledOliveButton>
        <span>オリーブ</span>
      </StyledOliveButton>
    </>
  );
};

export default Example;
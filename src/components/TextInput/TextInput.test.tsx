import "@testing-library/jest-dom/vitest";
import TextInput from "@/components/TextInput/TextInput";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

test("TextInput Component Test", async () => {
  const user = userEvent.setup(); // ユーザーイベントをシミュレートするためのセットアップ
  render(<TextInput />);

  // "Entered Text:"というテキストが画面に表示されていることを確認
  const textElement = screen.getByText("Entered Text:");
  expect(textElement).toBeInTheDocument();

  // aria-labelが"Text Input"の入力フィールドを取得
  const inputElement = screen.getByLabelText("Text Input");
  // 入力フィールドに"Hello World"というテキストを入力
  await user.type(inputElement, "Hello World");
  // 入力したテキストが"Entered Text: Hello World"として表示されていることを確認
  expect(screen.getByText("Entered Text: Hello World")).toBeInTheDocument();
});

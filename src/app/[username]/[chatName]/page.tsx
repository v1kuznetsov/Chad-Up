import { getUser } from "@/lib/getUser";
import { chatWorker } from "../actions";
import { Button } from "@/components/Button";
import { getMessages } from "@/lib/getMessages";
import { TextArea } from "@/components/TextArea";

export default async function Page({
  params,
}: {
  params: { chatName: string };
}) {
  const chatName = decodeURIComponent(params.chatName);
  const userData = await getUser();
  const chatData = await getMessages(chatName);

  return (
    <div className="flex grow flex-col items-center justify-end">
      <div className="w-full p-[1rem] text-center">
        {chatData.messages?.map((item, index) => (
          <p key={index}>{item.content}</p>
        ))}
      </div>
      <form
        action={chatWorker}
        className="flex w-full items-center justify-center gap-[1rem] px-[1rem]"
      >
        <TextArea
          id="message"
          className="w-full resize-none rounded-[0.75rem] border-2 border-black bg-[#a0d0b3] px-4 py-1 text-start text-black placeholder:text-[#777]"
          name="message"
          placeholder="Write a message..."
          required
        />
        <input type="hidden" name="url" value={chatName} />
        <input type="hidden" name="chat_id" value={chatData.chatId} />
        <input type="hidden" name="chat_id" value={chatName} />
        <input type="hidden" name="user_id" value={userData.profile?.id} />
        <Button>Send</Button>
      </form>
    </div>
  );
}

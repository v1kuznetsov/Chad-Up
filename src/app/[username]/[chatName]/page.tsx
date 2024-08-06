import { getUser } from "@/lib/getUser";
import { sendMessage } from "../actions";
import { getMessages } from "@/lib/getMessages";
import { TextArea } from "@/components/TextArea";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { chatName: string };
}) {
  const chatName = decodeURIComponent(params.chatName);
  const userData = await getUser();
  const chatData = await getMessages(chatName);

  if (userData.profile === undefined) {
    redirect("/");
  }

  return (
    <div className="flex grow flex-col items-center justify-end gap-[1rem]">
      <Link
        className="mb-auto rounded-[0.75rem] border-2 border-[#80d0b3] bg-transparent px-4 py-1 text-center text-[#80d0b3] hover:underline active:bg-[#63d0b3] active:text-[#ffffff]"
        href={`/${userData.profile.username}`}
      >
        Close chat
      </Link>
      <div className="w-full overflow-y-scroll text-center">
        {chatData.messages?.map((item, index) => (
          <div
            className={`${item.user_id === userData.profile?.id ? "justify-end" : "justify-start"} flex`}
            key={index}
          >
            <p className="my-1 rounded-[0.75rem] bg-[#333333] px-4 py-1">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <form
        action={sendMessage}
        className="flex w-full items-center justify-center"
      >
        <TextArea
          id="message"
          className=""
          name="message"
          placeholder="Write a message..."
          required
        />
        <input type="hidden" name="url" value={chatName} />
        <input type="hidden" name="chat_id" value={chatData.chatId} />
        <input type="hidden" name="chat_id" value={chatName} />
        <input type="hidden" name="user_id" value={userData.profile?.id} />
      </form>
    </div>
  );
}

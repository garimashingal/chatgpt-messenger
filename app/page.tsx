import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white p-10 ">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex md:flex-row flex-col justify-evenly space-x-2 text-white">
        {/* Examples */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />

            <h2>Examples</h2>
          </div>
          <div className="space-y-2 mt-10">
            <p className="infoText">&quot;Explain something to me&quot;</p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat?&quot;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2 mt-10">
            <p className="infoText">Change the GPT model to use</p>
            <p className="infoText">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText">
              Hot Toast notification when ChatGPT is thinking!
            </p>
          </div>
        </div>

        {/* Limitations */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2 mt-10">
            <p className="infoText">
              May ocassionally generate incorrect information
            </p>
            <p className="infoText">
              May ocassionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

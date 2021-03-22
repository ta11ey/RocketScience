import { useState } from "react"

const useAsyncLayout = () => {
  const [renderStep, setRenderStep] = useState(1)

  const order = (idx: number) => {
    return idx <= renderStep;
  };

  const setOrderItemsDone = (idx: number) => {
    if (renderStep === idx) {
      goToNextStep();
    }
  }

  const goToNextStep = () => {
    setRenderStep(renderStep + 1)
  }

  return {
    order,
    setOrderItemsDone
  }
}

export default useAsyncLayout;

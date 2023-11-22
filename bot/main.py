import json
import os
import torch
from transformers import pipeline

pipe = pipeline("text-generation", model="HuggingFaceH4/zephyr-7b-beta", torch_dtype=torch.bfloat16, device_map="auto")


while True:
    if os.path.isfile("data.json"):
        
        messages = json.load(open("data.json", "r", encoding="utf-8"))
        message = [
            messages[0],
            messages[1]
        ]
        prompt = pipe.tokenizer.apply_chat_template(message, tokenize=False, add_generation_prompt=True)
        outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
        f= open("../output.txt", "w", encoding="utf-8")
        f.write(outputs[0]["generated_text"])
        f.close()
        os.remove("data.json")
import sys
import os
import re
import shutil

def generate_method_file(module_name, method_name):
    return f'''export type RequestType = {"{}"}

export type ResponseType = {"{}"}
'''

def check_args(version, module_name):
    if not os.path.isdir(f"src/{version}"):
        raise Exception("Нет такой версии")

    if not os.path.isdir(f"src/{version}/{module_name}"):
        raise Exception("Нет такого модуля")

def generate_method(version, module_name, method_names):
    os.chdir("src")
    check_args(version, module_name)

    os.makedirs(f"src/{version}/{module_name}/methods", exist_ok=True)
    os.chdir(f"src/{version}/{module_name}/methods")
    for method_name in method_names:
        if os.path.isfile(f"{method_name}.ts"):
            print(f"Метод {method_name} уже существует")
        else:
            with open(f"{method_name}.ts", "w", encoding='utf-8') as file:
                file.write(generate_method_file(module_name, method_name))


if __name__ == "__main__":
    version = sys.argv[1]
    module_name = sys.argv[2]
    method_names = sys.argv[3:]
    generate_method(version, module_name, method_names)
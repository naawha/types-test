import sys
import os
import re
import shutil

DISCLAIMER = '''// this is an automatically generated file
// widerstand ist zwecklos'''

MODULE_METHODS_EXPORT = '''{DISCLAIMER}

enum {module_name} {{
  {methods}
}}

export default {module_name}
'''

MODULE_METHODS_EXPORT = '''{DISCLAIMER}

enum {module_name} {{
  {methods}
}}

export default {module_name}
'''

def generate_method_file(module_name, method_names):
    def get_method_export_line(module_name, method_name):
        return f"{method_name} = \"{module_name}.{method_name}\","

    methods = "\n  ".join(list(map(lambda x: get_method_export_line(module_name, x), method_names)))
    return MODULE_METHODS_EXPORT.format(
        DISCLAIMER=DISCLAIMER,
        module_name=module_name,
        methods=methods
    )

def generate_api_types_file(module_name, method_names):
    def get_method_export_line(method_name):
        return f"export {{ RequestType as {module_name.capitalize()}{method_name}RequestType }} from \"./methods/{method_name}\"\nexport {{ ResponseType as {module_name.capitalize()}{method_name}ResponseType }} from \"./methods/{method_name}\""
    methods = "\n".join(list(map(lambda x: get_method_export_line(x), method_names)))
    return f'''{DISCLAIMER}\n\n{methods}'''

def generate_module_api_types_file(module_names):
    def get_module_export_line(module_name):
        return f"export * from \"./{module_name}/api\""
    modules = "\n".join(list(map(lambda x: get_module_export_line(x), module_names)))
    return f'''{DISCLAIMER}\n\n{modules}'''

def generate_modules_file(module_names):
    def get_module_export_line(module_name):
        return f"export {{ default as {module_name} }} from \"./{module_name}\""
    modules = "\n".join(list(map(lambda x: get_module_export_line(x), module_names)))
    return f'''{DISCLAIMER}\n\n{modules}'''

def generate_types_file(module_names):
    def get_types_export_line(module_name):
        return f"export * from \"./{module_name}/types\""
    types = "\n".join(list(map(lambda x: get_types_export_line(x), module_names)))
    return f'''{DISCLAIMER}\n\n{types}'''

def check_args(version):
    if not os.path.isdir(f"src/{version}"):
        raise Exception("Нет такой версии")

def generate_export(version):
    check_args(version)
    os.chdir(f"src/{version}")

    module_names = list(filter(lambda x: os.path.isdir(x), os.listdir()))
    for module_name in module_names:
        methods_directory = f"{module_name}/methods"
        method_names = list(map(lambda x: x.replace(".ts", ""), os.listdir(methods_directory)))
        with open(f"{module_name}/index.ts", "w", encoding='utf-8') as file:
            file.write(generate_method_file(module_name, method_names))
        with open(f"{module_name}/api.ts", "w", encoding='utf-8') as file:
            file.write(generate_api_types_file(module_name, method_names))

    with open("index.ts", "w", encoding='utf-8') as file:
        file.write(generate_modules_file(module_names))
    with open("types.ts", "w", encoding='utf-8') as file:
        file.write(generate_types_file(module_names))
    with open("api.ts", "w", encoding='utf-8') as file:
        file.write(generate_module_api_types_file(module_names))

if __name__ == "__main__":
    version = sys.argv[1]
    generate_export(version)
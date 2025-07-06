import jedi
def auto_complete(code,line,column):
    script=jedi.Script(code)
    return[c.name for c in script.complete(line,column)]
def ont_text_change(event):
    code = text.get("1.0", tk.END)
    line , column = text
"""code + '''
pr
'''
print(auto_complete(code,2,2))
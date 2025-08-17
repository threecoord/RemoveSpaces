
function Main() {
        document.addEventListener('DOMContentLoaded', function() {
                const container = document.createElement('div');
                container.style.maxWidth = '600px';
                container.style.margin = '50px auto';
                container.style.padding = '20px';
                container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
                container.style.borderRadius = '8px';
                container.style.fontFamily = 'Arial, sans-serif';
                
                const title = document.createElement('h1');
                title.textContent = '去除字符串空格';
                title.style.textAlign = 'center';
                title.style.color = '#333';
                container.appendChild(title);
                
                const inputGroup = document.createElement('div');
                inputGroup.style.marginBottom = '20px';
                
                const inputLabel = document.createElement('label');
                inputLabel.textContent = '输入字符串:';
                inputLabel.style.display = 'block';
                inputLabel.style.marginBottom = '8px';
                inputLabel.style.fontWeight = 'bold';
                
                const inputTextarea = document.createElement('textarea');
                inputTextarea.id = 'inputText';
                inputTextarea.style.width = '100%';
                inputTextarea.style.height = '100px';
                inputTextarea.style.padding = '10px';
                inputTextarea.style.border = '1px solid #ddd';
                inputTextarea.style.borderRadius = '4px';
                inputTextarea.style.resize = 'vertical';
                
                inputGroup.appendChild(inputLabel);
                inputGroup.appendChild(inputTextarea);
                container.appendChild(inputGroup);
                
                const button = document.createElement('button');
                button.textContent = '去除空格';
                button.style.display = 'block';
                button.style.width = '100%';
                button.style.padding = '10px';
                button.style.backgroundColor = '#4CAF50';
                button.style.color = 'white';
                button.style.border = 'none';
                button.style.borderRadius = '4px';
                button.style.cursor = 'pointer';
                button.style.fontSize = '16px';
                button.style.margin = '20px 0';
                
                button.addEventListener('mouseover', function() {
                    button.style.backgroundColor = '#45a049';
                });
                
                button.addEventListener('mouseout', function() {
                    button.style.backgroundColor = '#4CAF50';
                });
                
                container.appendChild(button);
                
                const outputGroup = document.createElement('div');
                
                const outputLabel = document.createElement('label');
                outputLabel.textContent = '结果:';
                outputLabel.style.display = 'block';
                outputLabel.style.marginBottom = '8px';
                outputLabel.style.fontWeight = 'bold';
                
                const outputTextarea = document.createElement('textarea');
                outputTextarea.id = 'outputText';
                outputTextarea.style.width = '100%';
                outputTextarea.style.height = '100px';
                outputTextarea.style.padding = '10px';
                outputTextarea.style.border = '1px solid #ddd';
                outputTextarea.style.borderRadius = '4px';
                outputTextarea.style.resize = 'vertical';
                outputTextarea.readOnly = true;
                
                outputGroup.appendChild(outputLabel);
                outputGroup.appendChild(outputTextarea);
                container.appendChild(outputGroup);

                button.addEventListener('click', function() {
                    const inputText = inputTextarea.value;
                    const outputText = inputText.replace(/ /g, ''); //替换空格字符
                    outputTextarea.value = outputText;
                });

                document.body.appendChild(container);
            });
}

Main();

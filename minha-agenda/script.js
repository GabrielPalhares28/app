document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const changeBackgroundButton = document.getElementById('changeBackground');
    const backgroundInput = document.getElementById('backgroundInput');

    const defaultBackgrounds = [
        'url(https://via.placeholder.com/800x600.png?text=Background+1)',
        'url(https://via.placeholder.com/800x600.png?text=Background+2)',
        'url(https://via.placeholder.com/800x600.png?text=Background+3)'
    ];

    let backgrounds = JSON.parse(localStorage.getItem('backgrounds')) || defaultBackgrounds;
    let currentBackgroundIndex = localStorage.getItem('backgroundIndex') || 0;
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];

    changeBackgroundButton.addEventListener('click', () => {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
        localStorage.setItem('backgroundIndex', currentBackgroundIndex);
    });

    backgroundInput.addEventListener('change', () => {
        const file = backgroundInput.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            backgrounds.push(`url(${reader.result})`);
            localStorage.setItem('backgrounds', JSON.stringify(backgrounds));
            currentBackgroundIndex = backgrounds.length - 1;
            document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
            localStorage.setItem('backgroundIndex', currentBackgroundIndex);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const taskName = document.getElementById('taskName').value;
        const taskTime = document.getElementById('taskTime').value;
        
        if (taskName && taskTime) {
            addTask(taskName, taskTime);
            saveTasks();
            taskForm.reset();
        }
    });

    function addTask(name, time) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = `${name} - ${new Date(time).toLocaleString('pt-BR')}`;
        const button = document.createElement('button');
        button.textContent = 'Remover';
        button.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });
        
        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);

        setReminder(name, time);
    }

    function setReminder(name, time) {
        const now = new Date();
        const taskTime = new Date(time);
        const timeout = taskTime.getTime() - now.getTime();

        if (timeout > 0) {
            setTimeout(() => {
                alert(`Lembrete: ${name} - ${taskTime.toLocaleString('pt-BR')}`);
            }, timeout);
        }
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(task => {
            const [taskName, taskTime] = task.querySelector('span').textContent.split(' - ');
            tasks.push({ name: taskName, time: taskTime });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.name, new Date(task.time).toISOString()));
    }

    loadTasks();
});
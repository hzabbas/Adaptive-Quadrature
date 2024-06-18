function simpsonsRule(f, a, b) {
    const c = (a + b) / 2.0;
    const h3 = Math.abs(b - a) / 6.0;
    return h3 * (f(a) + 4.0 * f(c) + f(b));
}

function adaptiveQuadrature(f, a, b, tol, maxRecursionDepth = 50) {
    function adaptiveAux(f, a, b, tol, whole, maxRecursionDepth, depth) {
        const c = (a + b) / 2.0;
        const left = simpsonsRule(f, a, c);
        const right = simpsonsRule(f, c, b);
        if (depth > maxRecursionDepth) {
            console.log("Maximum recursion depth exceeded");
            return left + right;
        }
        if (Math.abs(left + right - whole) <= 15 * tol) {
            return left + right + (left + right - whole) / 15.0;
        }
        return (adaptiveAux(f, a, c, tol / 2.0, left, maxRecursionDepth, depth + 1) +
                adaptiveAux(f, c, b, tol / 2.0, right, maxRecursionDepth, depth + 1));
    }

    const initial = simpsonsRule(f, a, b);
    return adaptiveAux(f, a, b, tol, initial, maxRecursionDepth, 1);
}

function f(x) {
    return (100 / Math.pow(x, 2)) * Math.sin(10 / x);
}

const a = 1.0;
const b = 3.0;
const tol = 1e-4;
const approximation = adaptiveQuadrature(f, a, b, tol);

document.getElementById('result').textContent = `The approximate integral is: ${approximation}`;

const x = [];
const y = [];
for (let i = a; i <= b; i += 0.01) {
    x.push(i);
    y.push(f(i));
}

const trace = {
    x: x,
    y: y,
    type: 'scatter',
    mode: 'lines',
    name: 'f(x) = 100/x^2 * sin(10/x)'
};

const data = [trace];
const layout = {
    title: 'Function Curve',
    xaxis: {
        title: 'x'
    },
    yaxis: {
        title: 'f(x)'
    }
};

Plotly.newPlot('plot', data, layout);
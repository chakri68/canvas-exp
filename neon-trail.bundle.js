"use strict";(self.webpackChunkwebpack_babel_template=self.webpackChunkwebpack_babel_template||[]).push([[224],{968:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTY4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYmFiZWwtdGVtcGxhdGUvLi9zcmMvcGFnZXMvbmVvbi10cmFpbC9zdHlsZXMvZ2xvYmFsLnNjc3M/ZmZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///968\n")},844:(__unused_webpack_module,exports)=>{eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.assertOrThrow = exports.mergeOptionals = void 0;\nfunction mergeOptionals(optionals, defaultOptions) {\n    return { ...defaultOptions, ...optionals };\n}\nexports.mergeOptionals = mergeOptionals;\nfunction assertOrThrow(value) {\n    if (value === undefined || value === null)\n        throw new Error("Assertion Error");\n    return value;\n}\nexports.assertOrThrow = assertOrThrow;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQ0LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHFCQUFxQixHQUFHLHNCQUFzQjtBQUM5QztBQUNBLGFBQWE7QUFDYjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC10ZW1wbGF0ZS8uL3NyYy9saWIvdHlwZS11dGlscy50cz80MTIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hc3NlcnRPclRocm93ID0gZXhwb3J0cy5tZXJnZU9wdGlvbmFscyA9IHZvaWQgMDtcbmZ1bmN0aW9uIG1lcmdlT3B0aW9uYWxzKG9wdGlvbmFscywgZGVmYXVsdE9wdGlvbnMpIHtcbiAgICByZXR1cm4geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uYWxzIH07XG59XG5leHBvcnRzLm1lcmdlT3B0aW9uYWxzID0gbWVyZ2VPcHRpb25hbHM7XG5mdW5jdGlvbiBhc3NlcnRPclRocm93KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2VydGlvbiBFcnJvclwiKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLmFzc2VydE9yVGhyb3cgPSBhc3NlcnRPclRocm93O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///844\n')},380:(__unused_webpack_module,exports,__webpack_require__)=>{eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.NeonTrail = exports.NEON_COLORS = void 0;\nconst math_1 = __webpack_require__(684);\nconst type_utils_1 = __webpack_require__(844);\nconst defaultOptions = {\n    density: 10,\n    staticDensity: 5,\n    fastSpeed: 2,\n    slowSpeed: 0.5,\n    timeout: 1000,\n    maxSize: 7,\n    waneSpeed: 0.25,\n    burstDensity: 100,\n    burstSpeed: 5,\n    burstParticleSize: 7,\n    enableClickBurst: true,\n    glow: 10,\n    idleAnimation: true,\n};\nexports.NEON_COLORS = {\n    blue: 210,\n    pink: 300,\n    green: 120,\n    yellow: 60,\n    purple: 270,\n    turquoise: 180,\n    fuchsia: 300,\n    orange: 30,\n};\nconst weightedProbs = {\n    blue: 0.15,\n    fuchsia: 0.1,\n    green: 0.1,\n    orange: 0.1,\n    pink: 0.25,\n    purple: 0.15,\n    turquoise: 0.1,\n    yellow: 0.05,\n};\nclass NeonTrail {\n    options;\n    getNeonColor;\n    canvas;\n    ctx;\n    mouseLoc = null;\n    particles = [];\n    timeout = null;\n    isStopped = true;\n    ticker;\n    shrinkMode = false;\n    animationFrame = null;\n    paused = false;\n    constructor(options) {\n        this.options = (0, type_utils_1.mergeOptionals)(options, defaultOptions);\n        this.getNeonColor = NeonTrail.getWithWeightedProb(Object.entries(exports.NEON_COLORS).map(([key, val]) => ({\n            val,\n            prob: weightedProbs[key],\n        }))).get;\n        this.canvas = document.createElement("canvas");\n        this.canvas.classList.add("nt-canvas");\n        document.body.appendChild(this.canvas);\n        this.ctx = (0, type_utils_1.assertOrThrow)(this.canvas.getContext("2d"));\n        this.ticker = (0, math_1.Ticker)().tick;\n        this.resizeCanvas();\n        this.setupListeners();\n    }\n    resizeCanvas() {\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n    }\n    setupListeners() {\n        document.addEventListener("mousemove", this.onMouseMove);\n        document.addEventListener("mouseleave", this.onMouseLeave);\n        document.addEventListener("mouseenter", this.onMouseEnter);\n        document.addEventListener("mousedown", this.onMouseClick);\n    }\n    removeListeners() {\n        document.removeEventListener("mousemove", this.onMouseMove);\n        document.removeEventListener("mouseleave", this.onMouseLeave);\n        document.removeEventListener("mouseenter", this.onMouseEnter);\n        document.removeEventListener("mousedown", this.onMouseClick);\n    }\n    onMouseLeave = (e) => {\n        console.warn("Mouse left the screen");\n        this.shrinkMode = true;\n    };\n    onMouseEnter = () => {\n        console.warn("Mouse entered the screen");\n        this.shrinkMode = false;\n    };\n    onMouseMove = (e) => {\n        this.isStopped = false;\n        this.mouseLoc = {\n            position: { x: e.clientX, y: e.clientY },\n            velocity: (0, math_1.getVelocityVector)({ x: e.movementX, y: e.movementY }, this.ticker()),\n        };\n        this.addParticles();\n        if (this.timeout) {\n            clearTimeout(this.timeout);\n        }\n        this.timeout = setTimeout(() => {\n            this.isStopped = true;\n        }, this.options.timeout);\n    };\n    onMouseClick = (e) => {\n        if (this.options.enableClickBurst)\n            this.addBurstParticles();\n    };\n    addParticles(isStatic = false) {\n        if (this.shrinkMode)\n            return;\n        if (isStatic)\n            for (let d = 0; d < this.options.staticDensity; d++) {\n                this.particles.push(this.generateParticle(this.isStopped));\n            }\n        else\n            for (let d = 0; d < this.options.density; d++) {\n                this.particles.push(this.generateParticle());\n            }\n    }\n    generateParticle(slow = false) {\n        if (!this.mouseLoc)\n            console.warn("MouseLoc is null");\n        return {\n            x: this.mouseLoc?.position.x ?? 0,\n            y: this.mouseLoc?.position.y ?? 0,\n            size: (0, math_1.biasedRandom)(-4) * this.options.maxSize + 1,\n            color: `hsla(${this.getNeonColor()}, 100%, 50%, ${(0, math_1.biasedRandom)(4).toFixed(2)})`,\n            speedX: (slow\n                ? Math.random() * (this.options.slowSpeed * 2) -\n                    this.options.slowSpeed\n                : Math.random() * (this.options.fastSpeed * 2) -\n                    this.options.fastSpeed) + (this.mouseLoc?.velocity.x ?? 0),\n            speedY: (slow\n                ? Math.random() * (this.options.slowSpeed * 2) -\n                    this.options.slowSpeed\n                : Math.random() * (this.options.fastSpeed * 2) -\n                    this.options.fastSpeed) + (this.mouseLoc?.velocity.y ?? 0),\n            glow: (0, math_1.biasedRandom)(4) * this.options.glow,\n        };\n    }\n    addBurstParticles() {\n        for (let i = 0; i < this.options.burstDensity; i++) {\n            if (!this.mouseLoc)\n                console.warn("MouseLoc is null");\n            this.particles.push({\n                x: this.mouseLoc?.position.x ?? 0,\n                y: this.mouseLoc?.position.y ?? 0,\n                size: (0, math_1.biasedRandom)(-4) * this.options.burstParticleSize + 1,\n                color: `hsla(${this.getNeonColor()}, 100%, 50%, ${(0, math_1.biasedRandom)(4).toFixed(2)})`,\n                speedX: Math.random() * (this.options.burstSpeed * 2) -\n                    this.options.burstSpeed +\n                    (this.mouseLoc?.velocity.x ?? 0),\n                speedY: Math.random() * (this.options.burstSpeed * 2) -\n                    this.options.burstSpeed +\n                    (this.mouseLoc?.velocity.y ?? 0),\n                glow: (0, math_1.biasedRandom)(4) * this.options.glow,\n            });\n        }\n    }\n    init() {\n        if (this.animationFrame !== null)\n            return console.warn("Animation already started");\n        this.animate();\n    }\n    pause() {\n        if (this.paused)\n            return console.warn("Already paused");\n        this.removeListeners();\n        this.paused = true;\n        console.log("Paused");\n    }\n    resume() {\n        if (!this.paused)\n            return console.warn("Not paused");\n        this.setupListeners();\n        this.paused = false;\n        console.log("Resumed");\n    }\n    stop() {\n        this.stopAnimation();\n    }\n    animate = () => {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        // Static particles\n        if (this.options.idleAnimation && this.mouseLoc !== null)\n            this.addParticles(true);\n        for (let i = 0; i < this.particles.length; i++) {\n            this.ctx.save();\n            this.ctx.fillStyle = this.particles[i].color;\n            this.ctx.shadowBlur = this.particles[i].glow;\n            this.ctx.shadowColor = this.particles[i].color;\n            // Change this to get both circles and rects\n            if (Math.random() > 1) {\n                this.ctx.beginPath();\n                this.ctx.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size, 0, 2 * Math.PI);\n                this.ctx.closePath();\n                this.ctx.fill();\n            }\n            else {\n                this.ctx.fillRect(this.particles[i].x, this.particles[i].y, this.particles[i].size, this.particles[i].size);\n            }\n            this.ctx.restore();\n            this.particles[i].x += this.particles[i].speedX;\n            this.particles[i].y += this.particles[i].speedY;\n            this.particles[i].size -= this.options.waneSpeed;\n            if (this.particles[i].size <= 0) {\n                this.particles.splice(i, 1);\n                i--;\n            }\n        }\n        this.animationFrame = requestAnimationFrame(this.animate);\n    };\n    stopAnimation() {\n        // TODO: Implement this shat\n        if (this.animationFrame === null)\n            return console.warn("Animation already stopped");\n        cancelAnimationFrame(this.animationFrame);\n        this.animationFrame = null;\n    }\n    static getWithWeightedProb(values) {\n        // Check if the probs addup to more than 1\n        const s = values.reduce((acc, cur) => acc + cur.prob, 0);\n        const valueProbs = values.map((v) => ({ ...v, prob: v.prob / s }));\n        // Generate the cumulative probabilities\n        const cumulativeProbs = valueProbs.reduce((acc, cur) => {\n            return [...acc, cur.prob + (acc[acc.length - 1] ?? 0)];\n        }, []);\n        const get = () => {\n            const r = Math.random();\n            for (let i = 0; i < cumulativeProbs.length; i++) {\n                if (cumulativeProbs[i] > r) {\n                    return valueProbs[i].val;\n                }\n            }\n            return valueProbs[valueProbs.length - 1].val;\n        };\n        return { get };\n    }\n}\nexports.NeonTrail = NeonTrail;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgwLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixHQUFHLG1CQUFtQjtBQUN2QyxlQUFlLG1CQUFPLENBQUMsR0FBUTtBQUMvQixxQkFBcUIsbUJBQU8sQ0FBQyxHQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQsc0RBQXNELGdDQUFnQztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0NBQWdDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CLGVBQWUsdUNBQXVDO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0IsZUFBZSx1Q0FBdUM7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCx3QkFBd0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9uZW9uLXRyYWlsL3NjcmlwdHMvTmVvblRyYWlsLnRzP2Q3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5lb25UcmFpbCA9IGV4cG9ydHMuTkVPTl9DT0xPUlMgPSB2b2lkIDA7XG5jb25zdCBtYXRoXzEgPSByZXF1aXJlKFwiLi9tYXRoXCIpO1xuY29uc3QgdHlwZV91dGlsc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi90eXBlLXV0aWxzXCIpO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZGVuc2l0eTogMTAsXG4gICAgc3RhdGljRGVuc2l0eTogNSxcbiAgICBmYXN0U3BlZWQ6IDIsXG4gICAgc2xvd1NwZWVkOiAwLjUsXG4gICAgdGltZW91dDogMTAwMCxcbiAgICBtYXhTaXplOiA3LFxuICAgIHdhbmVTcGVlZDogMC4yNSxcbiAgICBidXJzdERlbnNpdHk6IDEwMCxcbiAgICBidXJzdFNwZWVkOiA1LFxuICAgIGJ1cnN0UGFydGljbGVTaXplOiA3LFxuICAgIGVuYWJsZUNsaWNrQnVyc3Q6IHRydWUsXG4gICAgZ2xvdzogMTAsXG4gICAgaWRsZUFuaW1hdGlvbjogdHJ1ZSxcbn07XG5leHBvcnRzLk5FT05fQ09MT1JTID0ge1xuICAgIGJsdWU6IDIxMCxcbiAgICBwaW5rOiAzMDAsXG4gICAgZ3JlZW46IDEyMCxcbiAgICB5ZWxsb3c6IDYwLFxuICAgIHB1cnBsZTogMjcwLFxuICAgIHR1cnF1b2lzZTogMTgwLFxuICAgIGZ1Y2hzaWE6IDMwMCxcbiAgICBvcmFuZ2U6IDMwLFxufTtcbmNvbnN0IHdlaWdodGVkUHJvYnMgPSB7XG4gICAgYmx1ZTogMC4xNSxcbiAgICBmdWNoc2lhOiAwLjEsXG4gICAgZ3JlZW46IDAuMSxcbiAgICBvcmFuZ2U6IDAuMSxcbiAgICBwaW5rOiAwLjI1LFxuICAgIHB1cnBsZTogMC4xNSxcbiAgICB0dXJxdW9pc2U6IDAuMSxcbiAgICB5ZWxsb3c6IDAuMDUsXG59O1xuY2xhc3MgTmVvblRyYWlsIHtcbiAgICBvcHRpb25zO1xuICAgIGdldE5lb25Db2xvcjtcbiAgICBjYW52YXM7XG4gICAgY3R4O1xuICAgIG1vdXNlTG9jID0gbnVsbDtcbiAgICBwYXJ0aWNsZXMgPSBbXTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICBpc1N0b3BwZWQgPSB0cnVlO1xuICAgIHRpY2tlcjtcbiAgICBzaHJpbmtNb2RlID0gZmFsc2U7XG4gICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gKDAsIHR5cGVfdXRpbHNfMS5tZXJnZU9wdGlvbmFscykob3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICB0aGlzLmdldE5lb25Db2xvciA9IE5lb25UcmFpbC5nZXRXaXRoV2VpZ2h0ZWRQcm9iKE9iamVjdC5lbnRyaWVzKGV4cG9ydHMuTkVPTl9DT0xPUlMpLm1hcCgoW2tleSwgdmFsXSkgPT4gKHtcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIHByb2I6IHdlaWdodGVkUHJvYnNba2V5XSxcbiAgICAgICAgfSkpKS5nZXQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcIm50LWNhbnZhc1wiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMuY3R4ID0gKDAsIHR5cGVfdXRpbHNfMS5hc3NlcnRPclRocm93KSh0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikpO1xuICAgICAgICB0aGlzLnRpY2tlciA9ICgwLCBtYXRoXzEuVGlja2VyKSgpLnRpY2s7XG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldHVwTGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uTW91c2VMZWF2ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25Nb3VzZUVudGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VDbGljayk7XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbk1vdXNlTGVhdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uTW91c2VFbnRlcik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlQ2xpY2spO1xuICAgIH1cbiAgICBvbk1vdXNlTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJNb3VzZSBsZWZ0IHRoZSBzY3JlZW5cIik7XG4gICAgICAgIHRoaXMuc2hyaW5rTW9kZSA9IHRydWU7XG4gICAgfTtcbiAgICBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk1vdXNlIGVudGVyZWQgdGhlIHNjcmVlblwiKTtcbiAgICAgICAgdGhpcy5zaHJpbmtNb2RlID0gZmFsc2U7XG4gICAgfTtcbiAgICBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VMb2MgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9LFxuICAgICAgICAgICAgdmVsb2NpdHk6ICgwLCBtYXRoXzEuZ2V0VmVsb2NpdHlWZWN0b3IpKHsgeDogZS5tb3ZlbWVudFgsIHk6IGUubW92ZW1lbnRZIH0sIHRoaXMudGlja2VyKCkpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZFBhcnRpY2xlcygpO1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnRpbWVvdXQpO1xuICAgIH07XG4gICAgb25Nb3VzZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVDbGlja0J1cnN0KVxuICAgICAgICAgICAgdGhpcy5hZGRCdXJzdFBhcnRpY2xlcygpO1xuICAgIH07XG4gICAgYWRkUGFydGljbGVzKGlzU3RhdGljID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hyaW5rTW9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGlzU3RhdGljKVxuICAgICAgICAgICAgZm9yIChsZXQgZCA9IDA7IGQgPCB0aGlzLm9wdGlvbnMuc3RhdGljRGVuc2l0eTsgZCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaCh0aGlzLmdlbmVyYXRlUGFydGljbGUodGhpcy5pc1N0b3BwZWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZm9yIChsZXQgZCA9IDA7IGQgPCB0aGlzLm9wdGlvbnMuZGVuc2l0eTsgZCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaCh0aGlzLmdlbmVyYXRlUGFydGljbGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGdlbmVyYXRlUGFydGljbGUoc2xvdyA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3VzZUxvYylcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1vdXNlTG9jIGlzIG51bGxcIik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLm1vdXNlTG9jPy5wb3NpdGlvbi54ID8/IDAsXG4gICAgICAgICAgICB5OiB0aGlzLm1vdXNlTG9jPy5wb3NpdGlvbi55ID8/IDAsXG4gICAgICAgICAgICBzaXplOiAoMCwgbWF0aF8xLmJpYXNlZFJhbmRvbSkoLTQpICogdGhpcy5vcHRpb25zLm1heFNpemUgKyAxLFxuICAgICAgICAgICAgY29sb3I6IGBoc2xhKCR7dGhpcy5nZXROZW9uQ29sb3IoKX0sIDEwMCUsIDUwJSwgJHsoMCwgbWF0aF8xLmJpYXNlZFJhbmRvbSkoNCkudG9GaXhlZCgyKX0pYCxcbiAgICAgICAgICAgIHNwZWVkWDogKHNsb3dcbiAgICAgICAgICAgICAgICA/IE1hdGgucmFuZG9tKCkgKiAodGhpcy5vcHRpb25zLnNsb3dTcGVlZCAqIDIpIC1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNsb3dTcGVlZFxuICAgICAgICAgICAgICAgIDogTWF0aC5yYW5kb20oKSAqICh0aGlzLm9wdGlvbnMuZmFzdFNwZWVkICogMikgLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZmFzdFNwZWVkKSArICh0aGlzLm1vdXNlTG9jPy52ZWxvY2l0eS54ID8/IDApLFxuICAgICAgICAgICAgc3BlZWRZOiAoc2xvd1xuICAgICAgICAgICAgICAgID8gTWF0aC5yYW5kb20oKSAqICh0aGlzLm9wdGlvbnMuc2xvd1NwZWVkICogMikgLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2xvd1NwZWVkXG4gICAgICAgICAgICAgICAgOiBNYXRoLnJhbmRvbSgpICogKHRoaXMub3B0aW9ucy5mYXN0U3BlZWQgKiAyKSAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mYXN0U3BlZWQpICsgKHRoaXMubW91c2VMb2M/LnZlbG9jaXR5LnkgPz8gMCksXG4gICAgICAgICAgICBnbG93OiAoMCwgbWF0aF8xLmJpYXNlZFJhbmRvbSkoNCkgKiB0aGlzLm9wdGlvbnMuZ2xvdyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYWRkQnVyc3RQYXJ0aWNsZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmJ1cnN0RGVuc2l0eTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91c2VMb2MpXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTW91c2VMb2MgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMubW91c2VMb2M/LnBvc2l0aW9uLnggPz8gMCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLm1vdXNlTG9jPy5wb3NpdGlvbi55ID8/IDAsXG4gICAgICAgICAgICAgICAgc2l6ZTogKDAsIG1hdGhfMS5iaWFzZWRSYW5kb20pKC00KSAqIHRoaXMub3B0aW9ucy5idXJzdFBhcnRpY2xlU2l6ZSArIDEsXG4gICAgICAgICAgICAgICAgY29sb3I6IGBoc2xhKCR7dGhpcy5nZXROZW9uQ29sb3IoKX0sIDEwMCUsIDUwJSwgJHsoMCwgbWF0aF8xLmJpYXNlZFJhbmRvbSkoNCkudG9GaXhlZCgyKX0pYCxcbiAgICAgICAgICAgICAgICBzcGVlZFg6IE1hdGgucmFuZG9tKCkgKiAodGhpcy5vcHRpb25zLmJ1cnN0U3BlZWQgKiAyKSAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5idXJzdFNwZWVkICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMubW91c2VMb2M/LnZlbG9jaXR5LnggPz8gMCksXG4gICAgICAgICAgICAgICAgc3BlZWRZOiBNYXRoLnJhbmRvbSgpICogKHRoaXMub3B0aW9ucy5idXJzdFNwZWVkICogMikgLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYnVyc3RTcGVlZCArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm1vdXNlTG9jPy52ZWxvY2l0eS55ID8/IDApLFxuICAgICAgICAgICAgICAgIGdsb3c6ICgwLCBtYXRoXzEuYmlhc2VkUmFuZG9tKSg0KSAqIHRoaXMub3B0aW9ucy5nbG93LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWUgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiQW5pbWF0aW9uIGFscmVhZHkgc3RhcnRlZFwiKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiQWxyZWFkeSBwYXVzZWRcIik7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXVzZWRcIik7XG4gICAgfVxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhdXNlZClcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXCJOb3QgcGF1c2VkXCIpO1xuICAgICAgICB0aGlzLnNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdW1lZFwiKTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgfVxuICAgIGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gU3RhdGljIHBhcnRpY2xlc1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlkbGVBbmltYXRpb24gJiYgdGhpcy5tb3VzZUxvYyAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuYWRkUGFydGljbGVzKHRydWUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnBhcnRpY2xlc1tpXS5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSB0aGlzLnBhcnRpY2xlc1tpXS5nbG93O1xuICAgICAgICAgICAgdGhpcy5jdHguc2hhZG93Q29sb3IgPSB0aGlzLnBhcnRpY2xlc1tpXS5jb2xvcjtcbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGlzIHRvIGdldCBib3RoIGNpcmNsZXMgYW5kIHJlY3RzXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5wYXJ0aWNsZXNbaV0ueCwgdGhpcy5wYXJ0aWNsZXNbaV0ueSwgdGhpcy5wYXJ0aWNsZXNbaV0uc2l6ZSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucGFydGljbGVzW2ldLngsIHRoaXMucGFydGljbGVzW2ldLnksIHRoaXMucGFydGljbGVzW2ldLnNpemUsIHRoaXMucGFydGljbGVzW2ldLnNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ueCArPSB0aGlzLnBhcnRpY2xlc1tpXS5zcGVlZFg7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS55ICs9IHRoaXMucGFydGljbGVzW2ldLnNwZWVkWTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLnNpemUgLT0gdGhpcy5vcHRpb25zLndhbmVTcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcnRpY2xlc1tpXS5zaXplIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9O1xuICAgIHN0b3BBbmltYXRpb24oKSB7XG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCB0aGlzIHNoYXRcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiQW5pbWF0aW9uIGFscmVhZHkgc3RvcHBlZFwiKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0V2l0aFdlaWdodGVkUHJvYih2YWx1ZXMpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb2JzIGFkZHVwIHRvIG1vcmUgdGhhbiAxXG4gICAgICAgIGNvbnN0IHMgPSB2YWx1ZXMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByb2IsIDApO1xuICAgICAgICBjb25zdCB2YWx1ZVByb2JzID0gdmFsdWVzLm1hcCgodikgPT4gKHsgLi4udiwgcHJvYjogdi5wcm9iIC8gcyB9KSk7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBjdW11bGF0aXZlIHByb2JhYmlsaXRpZXNcbiAgICAgICAgY29uc3QgY3VtdWxhdGl2ZVByb2JzID0gdmFsdWVQcm9icy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLmFjYywgY3VyLnByb2IgKyAoYWNjW2FjYy5sZW5ndGggLSAxXSA/PyAwKV07XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1bXVsYXRpdmVQcm9icy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjdW11bGF0aXZlUHJvYnNbaV0gPiByKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVByb2JzW2ldLnZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVQcm9ic1t2YWx1ZVByb2JzLmxlbmd0aCAtIDFdLnZhbDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgZ2V0IH07XG4gICAgfVxufVxuZXhwb3J0cy5OZW9uVHJhaWwgPSBOZW9uVHJhaWw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///380\n')},100:(__unused_webpack_module,exports,__webpack_require__)=>{eval("var __webpack_unused_export__;\n\n__webpack_unused_export__ = ({ value: true });\nconst NeonTrail_1 = __webpack_require__(380);\n__webpack_require__(968);\nwindow.NeonTrail = NeonTrail_1.NeonTrail;\nconst n = new NeonTrail_1.NeonTrail({});\nn.init();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLmpzIiwibWFwcGluZ3MiOiI7QUFBYTtBQUNiLDZCQUE2QyxFQUFFLGFBQWEsQ0FBQztBQUM3RCxvQkFBb0IsbUJBQU8sQ0FBQyxHQUFhO0FBQ3pDLG1CQUFPLENBQUMsR0FBdUI7QUFDL0I7QUFDQSxzQ0FBc0M7QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL25lb24tdHJhaWwvc2NyaXB0cy9pbmRleC50cz9iN2M2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTmVvblRyYWlsXzEgPSByZXF1aXJlKFwiLi9OZW9uVHJhaWxcIik7XG5yZXF1aXJlKFwiLi4vc3R5bGVzL2dsb2JhbC5zY3NzXCIpO1xud2luZG93Lk5lb25UcmFpbCA9IE5lb25UcmFpbF8xLk5lb25UcmFpbDtcbmNvbnN0IG4gPSBuZXcgTmVvblRyYWlsXzEuTmVvblRyYWlsKHt9KTtcbm4uaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///100\n")},684:(__unused_webpack_module,exports)=>{eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.biasedRandom = exports.getFromPDF = exports.getWithWeightedProb = exports.getRandomNeonicHue = exports.NEON_COLORS = exports.generateRandomColor = exports.Ticker = exports.compareVectors = exports.getDisplacementVector = exports.getVelocityVector = void 0;\nfunction getVelocityVector(displacementVector, time) {\n    return {\n        x: displacementVector.x / time,\n        y: displacementVector.y / time,\n    };\n}\nexports.getVelocityVector = getVelocityVector;\nfunction getDisplacementVector(oldDis, newDis) {\n    return { x: newDis.x - oldDis.x, y: newDis.y - oldDis.y };\n}\nexports.getDisplacementVector = getDisplacementVector;\nfunction compareVectors(a, b) {\n    return a.x === b.x && a.y === b.y;\n}\nexports.compareVectors = compareVectors;\nfunction Ticker() {\n    let time = Date.now();\n    const tick = () => {\n        const oldTime = time;\n        time = Date.now();\n        return time - oldTime;\n    };\n    return { tick };\n}\nexports.Ticker = Ticker;\nfunction generateRandomColor() {\n    // Generate random values for each color channel (red, green, blue, alpha)\n    const red = Math.floor(Math.random() * 256);\n    const green = Math.floor(Math.random() * 256);\n    const blue = Math.floor(Math.random() * 256);\n    const alpha = Math.random().toFixed(2); // Random alpha value between 0 and 1, rounded to 2 decimal places\n    // Create the RGBA color string\n    const rgbaColor = `rgba(${red},${green},${blue},${alpha})`;\n    return rgbaColor;\n}\nexports.generateRandomColor = generateRandomColor;\nexports.NEON_COLORS = {\n    blue: 210,\n    pink: 300,\n    green: 120,\n    yellow: 60,\n    purple: 270,\n    turquoise: 180,\n    fuchsia: 300,\n    orange: 30,\n};\nfunction getRandomNeonicHue() {\n    const colors = Object.keys(exports.NEON_COLORS);\n    return exports.NEON_COLORS[colors[Math.floor(Math.random() * colors.length)]];\n}\nexports.getRandomNeonicHue = getRandomNeonicHue;\nfunction getWithWeightedProb(values) {\n    // Check if the probs addup to more than 1\n    if (values.reduce((acc, cur) => acc + cur.prob, 0) > 1)\n        throw new Error("probabilities can\'t addup to more than 1");\n    // Generate the cumulative probabilities\n    const cumulativeProbs = values.reduce((acc, cur) => {\n        return [...acc, cur.prob + (acc[acc.length - 1] ?? 0)];\n    }, []);\n    const get = () => {\n        const r = Math.random();\n        for (let i = 0; i < cumulativeProbs.length; i++) {\n            if (cumulativeProbs[i] > r) {\n                return values[i].val;\n            }\n        }\n        return values[values.length - 1];\n    };\n    return { get };\n}\nexports.getWithWeightedProb = getWithWeightedProb;\nfunction getFromPDF(pdf, normalizeFun) {\n    return pdf(normalizeFun(Math.random()));\n}\nexports.getFromPDF = getFromPDF;\nfunction biasedRandom(bias = 2) {\n    if (bias === 0)\n        return Math.random();\n    if (bias > 0) {\n        // Higher values are preffered\n        return 1 - Math.pow(Math.random(), bias + 1);\n    }\n    // Lower values are preffered\n    return Math.pow(Math.random(), -bias + 1);\n}\nexports.biasedRandom = biasedRandom;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg0LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLGtCQUFrQixHQUFHLDJCQUEyQixHQUFHLDBCQUEwQixHQUFHLG1CQUFtQixHQUFHLDJCQUEyQixHQUFHLGNBQWMsR0FBRyxzQkFBc0IsR0FBRyw2QkFBNkIsR0FBRyx5QkFBeUI7QUFDOVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOEJBQThCLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDNUQ7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYmFiZWwtdGVtcGxhdGUvLi9zcmMvcGFnZXMvbmVvbi10cmFpbC9zY3JpcHRzL21hdGgudHM/MDBkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYmlhc2VkUmFuZG9tID0gZXhwb3J0cy5nZXRGcm9tUERGID0gZXhwb3J0cy5nZXRXaXRoV2VpZ2h0ZWRQcm9iID0gZXhwb3J0cy5nZXRSYW5kb21OZW9uaWNIdWUgPSBleHBvcnRzLk5FT05fQ09MT1JTID0gZXhwb3J0cy5nZW5lcmF0ZVJhbmRvbUNvbG9yID0gZXhwb3J0cy5UaWNrZXIgPSBleHBvcnRzLmNvbXBhcmVWZWN0b3JzID0gZXhwb3J0cy5nZXREaXNwbGFjZW1lbnRWZWN0b3IgPSBleHBvcnRzLmdldFZlbG9jaXR5VmVjdG9yID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0VmVsb2NpdHlWZWN0b3IoZGlzcGxhY2VtZW50VmVjdG9yLCB0aW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzcGxhY2VtZW50VmVjdG9yLnggLyB0aW1lLFxuICAgICAgICB5OiBkaXNwbGFjZW1lbnRWZWN0b3IueSAvIHRpbWUsXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0VmVsb2NpdHlWZWN0b3IgPSBnZXRWZWxvY2l0eVZlY3RvcjtcbmZ1bmN0aW9uIGdldERpc3BsYWNlbWVudFZlY3RvcihvbGREaXMsIG5ld0Rpcykge1xuICAgIHJldHVybiB7IHg6IG5ld0Rpcy54IC0gb2xkRGlzLngsIHk6IG5ld0Rpcy55IC0gb2xkRGlzLnkgfTtcbn1cbmV4cG9ydHMuZ2V0RGlzcGxhY2VtZW50VmVjdG9yID0gZ2V0RGlzcGxhY2VtZW50VmVjdG9yO1xuZnVuY3Rpb24gY29tcGFyZVZlY3RvcnMoYSwgYikge1xuICAgIHJldHVybiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcbn1cbmV4cG9ydHMuY29tcGFyZVZlY3RvcnMgPSBjb21wYXJlVmVjdG9ycztcbmZ1bmN0aW9uIFRpY2tlcigpIHtcbiAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkVGltZSA9IHRpbWU7XG4gICAgICAgIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm4gdGltZSAtIG9sZFRpbWU7XG4gICAgfTtcbiAgICByZXR1cm4geyB0aWNrIH07XG59XG5leHBvcnRzLlRpY2tlciA9IFRpY2tlcjtcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQ29sb3IoKSB7XG4gICAgLy8gR2VuZXJhdGUgcmFuZG9tIHZhbHVlcyBmb3IgZWFjaCBjb2xvciBjaGFubmVsIChyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSlcbiAgICBjb25zdCByZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuICAgIGNvbnN0IGdyZWVuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcbiAgICBjb25zdCBibHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcbiAgICBjb25zdCBhbHBoYSA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKTsgLy8gUmFuZG9tIGFscGhhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgcm91bmRlZCB0byAyIGRlY2ltYWwgcGxhY2VzXG4gICAgLy8gQ3JlYXRlIHRoZSBSR0JBIGNvbG9yIHN0cmluZ1xuICAgIGNvbnN0IHJnYmFDb2xvciA9IGByZ2JhKCR7cmVkfSwke2dyZWVufSwke2JsdWV9LCR7YWxwaGF9KWA7XG4gICAgcmV0dXJuIHJnYmFDb2xvcjtcbn1cbmV4cG9ydHMuZ2VuZXJhdGVSYW5kb21Db2xvciA9IGdlbmVyYXRlUmFuZG9tQ29sb3I7XG5leHBvcnRzLk5FT05fQ09MT1JTID0ge1xuICAgIGJsdWU6IDIxMCxcbiAgICBwaW5rOiAzMDAsXG4gICAgZ3JlZW46IDEyMCxcbiAgICB5ZWxsb3c6IDYwLFxuICAgIHB1cnBsZTogMjcwLFxuICAgIHR1cnF1b2lzZTogMTgwLFxuICAgIGZ1Y2hzaWE6IDMwMCxcbiAgICBvcmFuZ2U6IDMwLFxufTtcbmZ1bmN0aW9uIGdldFJhbmRvbU5lb25pY0h1ZSgpIHtcbiAgICBjb25zdCBjb2xvcnMgPSBPYmplY3Qua2V5cyhleHBvcnRzLk5FT05fQ09MT1JTKTtcbiAgICByZXR1cm4gZXhwb3J0cy5ORU9OX0NPTE9SU1tjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldXTtcbn1cbmV4cG9ydHMuZ2V0UmFuZG9tTmVvbmljSHVlID0gZ2V0UmFuZG9tTmVvbmljSHVlO1xuZnVuY3Rpb24gZ2V0V2l0aFdlaWdodGVkUHJvYih2YWx1ZXMpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcHJvYnMgYWRkdXAgdG8gbW9yZSB0aGFuIDFcbiAgICBpZiAodmFsdWVzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcm9iLCAwKSA+IDEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2JhYmlsaXRpZXMgY2FuJ3QgYWRkdXAgdG8gbW9yZSB0aGFuIDFcIik7XG4gICAgLy8gR2VuZXJhdGUgdGhlIGN1bXVsYXRpdmUgcHJvYmFiaWxpdGllc1xuICAgIGNvbnN0IGN1bXVsYXRpdmVQcm9icyA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBjdXIucHJvYiArIChhY2NbYWNjLmxlbmd0aCAtIDFdID8/IDApXTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdW11bGF0aXZlUHJvYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjdW11bGF0aXZlUHJvYnNbaV0gPiByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1tpXS52YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICByZXR1cm4geyBnZXQgfTtcbn1cbmV4cG9ydHMuZ2V0V2l0aFdlaWdodGVkUHJvYiA9IGdldFdpdGhXZWlnaHRlZFByb2I7XG5mdW5jdGlvbiBnZXRGcm9tUERGKHBkZiwgbm9ybWFsaXplRnVuKSB7XG4gICAgcmV0dXJuIHBkZihub3JtYWxpemVGdW4oTWF0aC5yYW5kb20oKSkpO1xufVxuZXhwb3J0cy5nZXRGcm9tUERGID0gZ2V0RnJvbVBERjtcbmZ1bmN0aW9uIGJpYXNlZFJhbmRvbShiaWFzID0gMikge1xuICAgIGlmIChiaWFzID09PSAwKVxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoYmlhcyA+IDApIHtcbiAgICAgICAgLy8gSGlnaGVyIHZhbHVlcyBhcmUgcHJlZmZlcmVkXG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5wb3coTWF0aC5yYW5kb20oKSwgYmlhcyArIDEpO1xuICAgIH1cbiAgICAvLyBMb3dlciB2YWx1ZXMgYXJlIHByZWZmZXJlZFxuICAgIHJldHVybiBNYXRoLnBvdyhNYXRoLnJhbmRvbSgpLCAtYmlhcyArIDEpO1xufVxuZXhwb3J0cy5iaWFzZWRSYW5kb20gPSBiaWFzZWRSYW5kb207XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///684\n')}},g=>{g(g.s=100)}]);
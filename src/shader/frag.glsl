#version 300 es

precision mediump float;

in vec2 vTexCoord;

out vec4 fragColor;

void main() {
	vec2 uv = vTexCoord;
	fragColor = vec4(uv, 0., 1.);
}

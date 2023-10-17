#version 300 es

in vec3 aPosition;
in vec2 aTexCoord;

out vec2 vTexCoord;

void main() {
	vTexCoord = aTexCoord;
	gl_Position = vec4(aPosition.xy*2.-1., aPosition.z, 1.);
}

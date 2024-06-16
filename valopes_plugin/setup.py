from setuptools import setup, find_packages

setup(
    name='mkdocs-plugin-example',
    version='0.1',
    packages=find_packages(),
    entry_points={
        'mkdocs.plugins': [
            'myplugin = mkdocs_plugin.plugin:MyPlugin',
        ]
    },
    install_requires=[
        'mkdocs>=1.1.2',
    ],
    python_requires='>=3.6',
)
